import { useEffect, useState } from 'react'
import { supabase } from '../supabase'

function Admin() {
  const [session, setSession] = useState(null)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [messages, setMessages] = useState([])
  const [messagesLoading, setMessagesLoading] = useState(false)
  const [newMessage, setNewMessage] = useState(false)

  // Check authentication
  useEffect(() => {
    async function getSession() {
      const { data } = await supabase.auth.getSession()
      setSession(data.session)
    }

    getSession()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  // Fetch existing messages
  useEffect(() => {
    if (!session) return

    async function fetchMessages() {
      setMessagesLoading(true)

      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Messages error:', error)
        setError(error.message)
      } else {
        setMessages(data || [])
      }

      setMessagesLoading(false)
    }

    fetchMessages()
  }, [session])

  // Supabase Realtime
  useEffect(() => {
    if (!session) return

    const channel = supabase
      .channel('messages-realtime')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
        },
        (payload) => {
          console.log('🔥 New message received:', payload.new)

          setMessages((currentMessages) => [
            payload.new,
            ...currentMessages,
          ])

          setNewMessage(true)

          // Browser notification
          if (
            'Notification' in window &&
            Notification.permission === 'granted'
          ) {
            new Notification('New Rackyweb Message 📩', {
              body: `New message from ${payload.new.name || 'a customer'}`,
            })
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [session])

  // Login
  async function handleLogin(e) {
    e.preventDefault()

    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    }

    setLoading(false)
  }

  // Logout
  async function handleLogout() {
    await supabase.auth.signOut()
    setMessages([])
  }

  // Ask browser for notification permission
  async function enableNotifications() {
    if (!('Notification' in window)) {
      alert('Your browser does not support notifications.')
      return
    }

    const permission = await Notification.requestPermission()

    if (permission === 'granted') {
      alert('Notifications enabled! 🔔')
    }
  }

  // Login screen
  if (!session) {
    return (
      <div className="min-h-screen bg-navy-950 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-ink-50 mb-2">
            Rackyweb Technologies
          </h1>

          <p className="text-ink-400 mb-8">
            Admin Dashboard
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-ink-300 mb-2">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Admin email"
                required
                className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-white/10 text-ink-50 outline-none"
              />
            </div>

            <div>
              <label className="block text-ink-300 mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Admin password"
                required
                className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-white/10 text-ink-50 outline-none"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg bg-electric-500 text-white font-semibold disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    )
  }

  // Admin dashboard
  return (
    <div className="min-h-screen bg-navy-950 text-ink-50 p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            Rackyweb Technologies Admin
          </h1>

          <p className="text-ink-400 mt-2">
            Incoming Messages
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={enableNotifications}
            className="px-5 py-2 rounded-lg bg-electric-500 text-white font-semibold"
          >
            🔔 Enable Notifications
          </button>

          <button
            onClick={handleLogout}
            className="px-5 py-2 rounded-lg border border-white/10 text-ink-300 hover:text-white"
          >
            Logout
          </button>
        </div>
      </div>

      {newMessage && (
        <div className="mb-6 p-4 rounded-xl border border-electric-400/30 bg-electric-500/10">
          <div className="flex items-center justify-between">
            <p className="font-semibold">
              🔴 New message received!
            </p>

            <button
              onClick={() => setNewMessage(false)}
              className="text-ink-400 hover:text-white"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {messagesLoading ? (
        <p className="text-ink-400">
          Loading messages...
        </p>
      ) : messages.length === 0 ? (
        <div className="border border-white/10 rounded-xl p-8 text-center">
          <p className="text-ink-400">
            No messages yet.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className="border border-white/10 rounded-xl p-6 bg-navy-900"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold">
                    {message.name}
                  </h2>

                  <p className="text-ink-400 mt-1">
                    {message.email}
                  </p>

                  {message.phone && (
                    <p className="text-ink-400">
                      {message.phone}
                    </p>
                  )}
                </div>

                {message.created_at && (
                  <span className="text-xs text-ink-500">
                    {new Date(message.created_at).toLocaleString()}
                  </span>
                )}
              </div>

              {message.subject && (
                <h3 className="mt-5 font-semibold">
                  {message.subject}
                </h3>
              )}

              <p className="mt-3 text-ink-300 whitespace-pre-wrap">
                {message.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Admin