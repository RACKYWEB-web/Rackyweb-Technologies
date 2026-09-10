
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
            message: `${form.description}\n\nCompany / Organization: ${form.company}`,
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
      })
    } catch (error) {
      console.error('Contact form error:', error)
      setStatus('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Let&apos;s Work Together
          </h2>

          <p className="text-gray-600">
            Tell us about your project and let&apos;s build something great.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name + Email */}
          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border p-4"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border p-4"
            />
          </div>

          {/* Phone + Company */}
          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full rounded-lg border p-4"
            />

            <input
              type="text"
              name="company"
              placeholder="Company / Organization"
              value={form.company}
              onChange={handleChange}
              className="w-full rounded-lg border p-4"
            />
          </div>

          {/* Service + Budget */}
          <div className="grid gap-6 md:grid-cols-2">
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full rounded-lg border p-4"
            >
              <option value="">Select a Service</option>
              <option value="Website Development">
                Website Development
              </option>
              <option value="Web Application">
                Web Application
              </option>
              <option value="Software Development">
                Software Development
              </option>
              <option value="AI Solutions">
                AI Solutions
              </option>
              <option value="Digital Products">
                Digital Products
              </option>
              <option value="Other">Other</option>
            </select>

            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              required
              className="w-full rounded-lg border p-4"
            >
              <option value="">Select Your Budget</option>
              <option value="Below ₦100,000">
                Below ₦100,000
              </option>
              <option value="₦100,000 - ₦250,000">
                ₦100,000 - ₦250,000
              </option>
              <option value="₦250,000 - ₦500,000">
                ₦250,000 - ₦500,000
              </option>
              <option value="₦500,000+">
                ₦500,000+
              </option>
            </select>
          </div>

          {/* Description */}
          <textarea
            name="description"
            placeholder="Tell us about your project..."
            value={form.description}
            onChange={handleChange}
            required
            rows="6"
            className="w-full rounded-lg border p-4"
          />

          {/* Premium Send Button */}
          <button
            type="submit"
            disabled={loading}
            className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-6 py-4 font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(59,130,246,0.65)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {/* Moving shine */}
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative flex items-center justify-center gap-3">
              {loading ? (
                <>
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </>
              )}
            </span>
          </button>

          {/* Result */}
          {status && (
            <div
              className={`rounded-lg p-4 text-center font-medium ${
                status.includes('successfully')
                  ? 'bg-green-50 text-green-700'
                  : 'bg-red-50 text-red-700'
              }`}
            >
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
