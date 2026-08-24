import { academy, faqs } from '../../data/technologies.js'
import Section from '../../components/Section/Section.jsx'
import Button from '../../components/Button/Button.jsx'
import { Icon } from '../../utils/icons.jsx'
import { useState } from 'react'

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(false)
  return (
    <Section delay={index * 60} className="border-b border-white/[0.06] py-5">
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between text-left gap-4">
        <span className="font-display font-medium text-ink-100">{item.q}</span>
        <Icon name="chevron" className={`w-4 h-4 text-ink-500 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="text-sm text-ink-400 leading-relaxed mt-3 max-w-2xl">{item.a}</p>}
    </Section>
  )
}

export default function Academy() {
  return (
    <div>
      <section className="section-pad pt-20 pb-16 md:pt-28">
        <div className="container-page max-w-3xl">
          <Section>
            <span className="eyebrow">{academy.name}</span>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-ink-50 mt-5 leading-tight">{academy.intro}</h1>
            <p className="text-ink-400 text-lg leading-relaxed mt-6">{academy.description}</p>
            {academy.whatsappLink ? (
              <Button href={academy.whatsappLink} variant="primary" className="mt-8">Explore Rackyweb Tech Academy</Button>
            ) : (
              <Button to="/contact" variant="primary" className="mt-8">Ask About Joining</Button>
            )}
          </Section>
        </div>
      </section>

      <section className="section-pad pb-24 md:pb-32">
        <div className="container-page">
          <Section className="max-w-xl mb-10">
            <span className="eyebrow">Courses</span>
            <h2 className="font-display font-semibold text-3xl text-ink-50 mt-4">What you can learn.</h2>
          </Section>
          <div className="grid sm:grid-cols-3 gap-5">
            {academy.courses.map((c, i) => (
              <Section key={c.id} delay={i * 70} className="card p-6">
                <div className="eyebrow mb-2">{c.level}</div>
                <h3 className="font-display font-semibold text-lg text-ink-50">{c.title}</h3>
              </Section>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad py-24 md:py-32 bg-navy-900/50 border-y border-white/[0.06]">
        <div className="container-page grid md:grid-cols-2 gap-10">
          <Section>
            <span className="eyebrow">Class Access</span>
            <h2 className="font-display font-semibold text-3xl text-ink-50 mt-4">Learning happens on WhatsApp.</h2>
            <p className="text-ink-400 leading-relaxed mt-4 max-w-md">
              Rackyweb Tech Academy classes are conducted primarily through WhatsApp \u2014 keeping learning direct and accessible, without needing a separate platform.
            </p>
          </Section>
          <Section delay={100} className="card p-7">
            <h3 className="font-display font-semibold text-lg text-ink-50">Student Portal</h3>
            <p className="text-sm text-ink-400 leading-relaxed mt-2">Registration, announcements, and resources will be accessible here as the academy grows.</p>
            <Button to="/contact" variant="outline" className="mt-5 w-full">Register Interest</Button>
          </Section>
        </div>
      </section>

      <section className="section-pad py-24 md:py-32">
        <div className="container-page max-w-2xl">
          <Section className="mb-6">
            <span className="eyebrow">FAQ</span>
            <h2 className="font-display font-semibold text-3xl text-ink-50 mt-4">Common questions.</h2>
          </Section>
          <div>
            {faqs.map((f, i) => <FaqItem key={i} item={f} index={i} />)}
          </div>
        </div>
      </section>
    </div>
  )
}
