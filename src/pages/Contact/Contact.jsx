
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

      setStatus('Message sent successfully! We will get back to you soon.')

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
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Let&apos;s Work Together
          </h2>

          <p className="text-gray-600">
            Tell us about your project and let&apos;s build something great.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-4 border rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-4 border rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full p-4 border rounded-lg"
            />

            <input
              type="text"
              name="company"
              placeholder="Company / Organization"
              value={form.company}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full p-4 border rounded-lg"
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
              className="w-full p-4 border rounded-lg"
            >
              <option value="">Select Your Budget</option>
              <option value="Below ₦100,000">Below ₦100,000</option>
              <option value="₦100,000 - ₦250,000">
                ₦100,000 - ₦250,000
              </option>
              <option value="₦250,000 - ₦500,000">
                ₦250,000 - ₦500,000
              </option>
              <option value="₦500,000+">₦500,000+</option>
            </select>
          </div>

          <textarea
            name="description"
            placeholder="Tell us about your project..."
            value={form.description}
            onChange={handleChange}
            required
            rows="6"
            className="w-full p-4 border rounded-lg"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-6 rounded-lg bg-black text-white font-semibold hover:opacity-90 disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {status && (
            <p className="text-center font-medium">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
