import { useState } from 'react'
import { company } from '../../data/company.js'
import Section from '../../components/Section/Section.jsx'
import { Icon } from '../../utils/icons.jsx'

const services = ['Web Development', 'Software Development', 'Artificial Intelligence', 'UI/UX Design', 'Mobile Applications', 'Business Automation', 'E-commerce', 'IT Consulting', 'Not Sure Yet']
const budgets = ['Under $500', '$500 \u2013 $2,000', '$2,000 \u2013 $10,000', '$10,000+', 'Let\u2019s discuss']

const initial = { name: '', email: '', phone: '', company: '', service: '', budget: '', description: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [toast, setToast] = useState(null)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Full name is required.'
    if (!form.email.trim()) next.email = 'Email is required.'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.description.trim()) next.description = 'Tell us a little about the project.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    // Note: this form is front-end only right now \u2014 it does not send
    // anywhere. Connect it to Supabase, Formspree, or another backend
    // before relying on it in production.
    setToast('Message received \u2014 thank you. We will follow up soon.')
    setForm(initial)
    setTimeout(() => setToast(null), 4000)
  }

  return (
    <div>
      <section className="section-pad pt-20 pb-16 md:pt-28">
        <div className="container-page max-w-2xl">
          <Section>
            <span className="eyebrow">Contact</span>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-ink-50 mt-5 leading-tight">Let&rsquo;s talk about your project.</h1>
            <p className="text-ink-400 text-lg leading-relaxed mt-6">Tell us what you&rsquo;re building, and we&rsquo;ll follow up to talk through it.</p>
          </Section>
        </div>
      </section>

      <section className="section-pad pb-24 md:pb-32">
        <div className="container-page grid lg:grid-cols-[1.4fr_1fr] gap-12 max-w-5xl">
          <Section>
            <form onSubmit={handleSubmit} noValidate className="card p-7 md:p-9 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wide text-ink-500 block mb-2">Full Name *</label>
                  <input value={form.name} onChange={update('name')} className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-ink-100 focus:border-electric-400 outline-none transition-colors" placeholder="Your name" />
                  {errors.name && <p className="text-xs text-rose-400 mt-1.5">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-xs font-mono uppercase tracking-wide text-ink-500 block mb-2">Email *</label>
                  <input value={form.email} onChange={update('email')} className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-ink-100 focus:border-electric-400 outline-none transition-colors" placeholder="you@example.com" />
                  {errors.email && <p className="text-xs text-rose-400 mt-1.5">{errors.email}</p>}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wide text-ink-500 block mb-2">Phone</label>
                  <input value={form.phone} onChange={update('phone')} className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-ink-100 focus:border-electric-400 outline-none transition-colors" placeholder="Optional" />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase tracking-wide text-ink-500 block mb-2">Company / Organization</label>
                  <input value={form.company} onChange={update('company')} className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-ink-100 focus:border-electric-400 outline-none transition-colors" placeholder="Optional" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wide text-ink-500 block mb-2">Service Needed</label>
                  <select value={form.service} onChange={update('service')} className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-ink-100 focus:border-electric-400 outline-none transition-colors">
                    <option value="" className="bg-navy-900">Select a service</option>
                    {services.map((s) => <option key={s} value={s} className="bg-navy-900">{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-mono uppercase tracking-wide text-ink-500 block mb-2">Budget Range</label>
                  <select value={form.budget} onChange={update('budget')} className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-ink-100 focus:border-electric-400 outline-none transition-colors">
                    <option value="" className="bg-navy-900">Select a range</option>
                    {budgets.map((b) => <option key={b} value={b} className="bg-navy-900">{b}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs font-mono uppercase tracking-wide text-ink-500 block mb-2">Project Description *</label>
                <textarea value={form.description} onChange={update('description')} rows={5} className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-ink-100 focus:border-electric-400 outline-none transition-colors resize-none" placeholder="Tell us about what you're building." />
                {errors.description && <p className="text-xs text-rose-400 mt-1.5">{errors.description}</p>}
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send Message <Icon name="arrow" className="w-4 h-4" />
              </button>
            </form>
          </Section>

          <Section delay={120} className="space-y-5">
            <div className="card p-6">
              <div className="eyebrow mb-2">Email</div>
              <a href={`mailto:${company.email}`} className="text-ink-100 hover:text-electric-300 transition-colors">{company.email}</a>
            </div>
            <div className="card p-6">
              <div className="eyebrow mb-2">Phone</div>
              <span className="text-ink-100">{company.phone}</span>
            </div>
            <div className="card p-6">
              <div className="eyebrow mb-2">Location</div>
              <span className="text-ink-100">{company.location}</span>
            </div>
            {company.social.github && (
              <div className="card p-6">
                <div className="eyebrow mb-2">GitHub</div>
                <a href={company.social.github} target="_blank" rel="noopener noreferrer" className="text-ink-100 hover:text-electric-300 transition-colors">View Profile</a>
              </div>
            )}
          </Section>
        </div>
      </section>

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] card px-6 py-4 flex items-center gap-3 reveal">
          <Icon name="check" className="w-5 h-5 text-cyan-400" />
          <span className="text-sm text-ink-100">{toast}</span>
        </div>
      )}
    </div>
  )
}
