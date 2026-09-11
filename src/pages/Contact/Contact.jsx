
import { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    description: '',
    'country/city': '',
  })

  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      const response = await fetch(
        'https://rackyweb-go-backened.onrender.com/api/v1/submit-message',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            subject: `${form.service} - ${form.budget}`,
            message: `${form.description}\n\nCompany / Organization: ${form.company}\n\nCountry / City: ${form['country/city']}`,
          }),
        }
      )

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setStatus(
        'Message sent successfully! We will get back to you soon.'
      )

      setForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        description: '',
        'country/city': '',
      })
    } catch (error) {
      console.error('Contact form error:', error)
      setStatus('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 hover:border-slate-500 focus:border-violet-400 focus:bg-slate-900 focus:ring-4 focus:ring-violet-500/10'

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-20"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-slate-950" />

      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-64 w-64 rounded-full bg-blue-600/10 blur-[110px]" />

      <div className="mx-auto max-w-5xl">

        {/* ORIGINAL HEADING RETAINED */}
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Let&apos;s Work Together
          </h2>

          <p className="text-sm text-slate-400 md:text-base">
            Tell us about your project and let&apos;s build something great.
          </p>
        </div>

        {/* Form */}
        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl backdrop-blur-xl md:p-8">

          {/* Animated glow */}
          <div className="pointer-events-none absolute -inset-px -z-10 rounded-3xl bg-gradient-to-r from-violet-500/20 via-blue-500/10 to-violet-500/20 opacity-60 blur-xl" />

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name + Email */}
            <div className="grid gap-5 md:grid-cols-2">
              <div className="group">
                <label className="mb-2 block text-xs font-medium text-slate-400 transition-colors group-focus-within:text-violet-300">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div className="group">
                <label className="mb-2 block text-xs font-medium text-slate-400 transition-colors group-focus-within:text-violet-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {/* Phone + Company */}
            <div className="grid gap-5 md:grid-cols-2">
              <div className="group">
                <label className="mb-2 block text-xs font-medium text-slate-400 transition-colors group-focus-within:text-violet-300">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+234 800 000 0000"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div className="group">
                <label className="mb-2 block text-xs font-medium text-slate-400 transition-colors group-focus-within:text-violet-300">
                  Company / Organization
                </label>

                <input
                  type="text"
                  name="company"
                  placeholder="Your company"
                  value={form.company}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Service + Budget */}
            <div className="grid gap-5 md:grid-cols-2">
              <div className="group">
                <label className="mb-2 block text-xs font-medium text-slate-400 transition-colors group-focus-within:text-violet-300">
                  Service
                </label>

                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" className="bg-slate-900">
                    Select a service
                  </option>
                  <option value="Website Development" className="bg-slate-900">
                    Website Development
                  </option>
                  <option value="Web Application" className="bg-slate-900">
                    Web Application
                  </option>
                  <option value="Software Development" className="bg-slate-900">
                    Software Development
                  </option>
                  <option value="AI Solutions" className="bg-slate-900">
                    AI Solutions
                  </option>
                  <option value="Digital Products" className="bg-slate-900">
                    Digital Products
                  </option>
                  <option value="Other" className="bg-slate-900">
                    Other
                  </option>
                </select>
              </div>

              <div className="group">
                <label className="mb-2 block text-xs font-medium text-slate-400 transition-colors group-focus-within:text-violet-300">
                  Budget
                </label>

                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  required
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" className="bg-slate-900">
                    Select your budget
                  </option>
                  <option value="Below ₦100,000" className="bg-slate-900">
                    Below ₦100,000
                  </option>
                  <option value="₦100,000 - ₦250,000" className="bg-slate-900">
                    ₦100,000 - ₦250,000
                  </option>
                  <option value="₦250,000 - ₦500,000" className="bg-slate-900">
                    ₦250,000 - ₦500,000
                  </option>
                  <option value="₦500,000+" className="bg-slate-900">
                    ₦500,000+
                  </option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="group">
              <label className="mb-2 block text-xs font-medium text-slate-400 transition-colors group-focus-within:text-violet-300">
                Project Details
              </label>

              <textarea
                name="description"
                placeholder="Tell us about your project..."
                value={form.description}
                onChange={handleChange}
                required
                rows="4"
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Bottom */}
            <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-5 sm:flex-row">

              <p className="text-center text-xs text-slate-500 sm:text-left">
                Your information is kept private and secure.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-900/40 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative flex items-center gap-2">
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </>
                  )}
                </span>
              </button>
            </div>

            {status && (
              <div
                className={`rounded-xl border p-3 text-center text-sm font-medium ${
                  status.includes('successfully')
                    ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300'
                    : 'border-red-500/20 bg-red-500/10 text-red-300'
                }`}
              >
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
