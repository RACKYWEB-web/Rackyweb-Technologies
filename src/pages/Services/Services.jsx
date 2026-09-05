import { useState } from 'react'
import { services } from '../../data/services.js'
import { solutions } from '../../data/solutions.js'
import { technologyStack } from '../../data/technologies.js'
import Section from '../../components/Section/Section.jsx'
import ServiceCard from '../../components/ServiceCard/ServiceCard.jsx'
import Modal from '../../components/Modal/Modal.jsx'
import Button from '../../components/Button/Button.jsx'

export default function Services() {
  const [activeService, setActiveService] = useState(null)

  return (
    <div>
      <section className="section-pad pt-20 pb-16 md:pt-28">
        <div className="container-page max-w-3xl">
          <Section>
            <span className="eyebrow">What We Offer</span>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-ink-50 mt-5 leading-tight">Services for real technology needs.</h1>
            <p className="text-ink-400 text-lg leading-relaxed mt-6">Every service exists to solve a genuine problem not to pad a list.</p>
          </Section>
        </div>
      </section>

      <section className="section-pad pb-24 md:pb-32">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Section key={s.id} delay={i * 60}>
              <ServiceCard service={s} onLearnMore={setActiveService} />
            </Section>
          ))}
        </div>
      </section>

      <section className="section-pad py-24 md:py-32 bg-navy-900/50 border-y border-white/[0.06]">
        <div className="container-page">
          <Section className="max-w-xl mb-14">
            <span className="eyebrow">Solutions Built Around Real Problems</span>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink-50 mt-4">Not just services \u2014 solutions.</h2>
          </Section>
          <div className="grid md:grid-cols-2 gap-5">
            {solutions.map((s, i) => (
              <Section key={s.id} delay={(i % 6) * 60} className="card p-6">
                <h3 className="font-display font-semibold text-lg text-ink-50">{s.title}</h3>
                <div className="mt-4 space-y-2.5 text-sm">
                  <p><span className="text-ink-500 font-mono text-[11px] uppercase tracking-wide">Problem — </span><span className="text-ink-400">{s.problem}</span></p>
                  <p><span className="text-electric-400 font-mono text-[11px] uppercase tracking-wide">Approach — </span><span className="text-ink-400">{s.approach}</span></p>
                  <p><span className="text-cyan-400 font-mono text-[11px] uppercase tracking-wide">Outcome — </span><span className="text-ink-400">{s.outcome}</span></p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad py-24 md:py-32">
        <div className="container-page">
          <Section className="max-w-xl mb-12">
            <span className="eyebrow">Technologies</span>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink-50 mt-4">The stack behind the work.</h2>
          </Section>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {technologyStack.map((group, i) => (
              <Section key={group.category} delay={i * 70} className="card p-6">
                <div className="eyebrow mb-3">{group.category}</div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((t) => (
                    <span key={t} className="font-mono text-xs px-2.5 py-1.5 rounded-full bg-white/[0.04] text-ink-300">{t}</span>
                  ))}
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad pb-24 text-center">
        <Button to="/contact" variant="primary">Start a Project</Button>
      </section>

      <Modal open={!!activeService} onClose={() => setActiveService(null)}>
        {activeService && (
          <>
            <span className="eyebrow">Service</span>
            <h3 className="font-display font-semibold text-2xl md:text-3xl text-ink-50 mt-3">{activeService.title}</h3>
            <p className="text-ink-400 leading-relaxed mt-4">{activeService.details}</p>
            <Button to="/contact" variant="primary" className="mt-7">Start a Project</Button>
          </>
        )}
      </Modal>
    </div>
  )
}
