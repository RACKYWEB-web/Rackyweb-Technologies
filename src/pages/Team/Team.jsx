import { useState } from 'react'
import { team } from '../../data/team.js'
import Section from '../../components/Section/Section.jsx'
import TeamCard from '../../components/TeamCard/TeamCard.jsx'
import Modal from '../../components/Modal/Modal.jsx'
import Button from '../../components/Button/Button.jsx'

export default function Team() {
  const [active, setActive] = useState(null)

  return (
    <div>
      <section className="section-pad pt-20 pb-16 md:pt-28">
        <div className="container-page max-w-3xl">
          <Section>
            <span className="eyebrow">Our People</span>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-ink-50 mt-5 leading-tight">Meet the People Behind Rackyweb</h1>
          </Section>
        </div>
      </section>

      <section className="section-pad pb-24 md:pb-32">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <Section key={m.id} delay={i * 80}><TeamCard member={m} onOpen={setActive} /></Section>
          ))}
        </div>
      </section>

      <section className="section-pad py-24 text-center">
        <Button to="/contact" variant="primary">Start a Project</Button>
      </section>

      <Modal open={!!active} onClose={() => setActive(null)}>
        {active && (
          <>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-500/25 to-violet-500/25 border border-white/10 flex items-center justify-center font-display text-lg text-ink-200 mb-5">
              {active.name.replace(/[[\]]/g, '').split(' ').map((w) => w[0]).slice(0, 2).join('')}
            </div>
            <h3 className="font-display font-semibold text-2xl text-ink-50">{active.name}</h3>
            <p className="eyebrow mt-1">{active.role}</p>
            <p className="text-ink-400 leading-relaxed mt-4">{active.bio}</p>
            {active.skills && (
              <div className="flex flex-wrap gap-2 mt-5">
                {active.skills.map((s) => (
                  <span key={s} className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] text-ink-400">{s}</span>
                ))}
              </div>
            )}
            <div className="flex gap-4 mt-6">
              {active.social?.github && <a href={active.social.github} target="_blank" rel="noopener noreferrer" className="text-sm text-electric-400 hover:text-electric-300">GitHub</a>}
            </div>
          </>
        )}
      </Modal>
    </div>
  )
}
