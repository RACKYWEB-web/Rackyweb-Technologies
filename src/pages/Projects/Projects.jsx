import { useMemo, useState } from 'react'
import { projects, projectCategories, caseStudies } from '../../data/projects.js'
import Section from '../../components/Section/Section.jsx'
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx'
import Button from '../../components/Button/Button.jsx'

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  )

  return (
    <div>
      <section className="section-pad pt-20 pb-12 md:pt-28">
        <div className="container-page max-w-3xl">
          <Section>
            <span className="eyebrow">Selected Work</span>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-ink-50 mt-5 leading-tight">Projects built to solve real problems.</h1>
          </Section>
        </div>
      </section>

      <section className="section-pad pb-24 md:pb-32">
        <div className="container-page">
          <Section className="flex flex-wrap gap-2.5 mb-10">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-mono text-xs tracking-wide px-4 py-2.5 rounded-full border transition-colors ${
                  filter === cat ? 'border-electric-400 bg-electric-500/15 text-electric-300' : 'border-white/10 text-ink-400 hover:border-white/25'
                }`}
              >
                {cat}
              </button>
            ))}
          </Section>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <Section key={p.id} delay={(i % 6) * 70}><ProjectCard project={p} /></Section>
            ))}
          </div>
          {filtered.length === 0 && <p className="text-ink-500 text-center py-16">No projects in this category yet.</p>}
        </div>
      </section>

      <section className="section-pad py-24 md:py-32 bg-navy-900/50 border-y border-white/[0.06]">
        <div className="container-page max-w-3xl">
          <Section className="mb-14">
            <span className="eyebrow">Case Studies</span>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink-50 mt-4">A closer look at how a project comes together.</h2>
          </Section>
          {caseStudies.map((cs, i) => (
            <Section key={cs.id} delay={i * 90} className="card p-8 md:p-10">
              <h3 className="font-display font-semibold text-2xl text-ink-50">{cs.title}</h3>
              <div className="grid sm:grid-cols-2 gap-6 mt-7">
                {[
                  ['Problem', cs.problem],
                  ['Strategy', cs.strategy],
                  ['Solution', cs.solution],
                  ['Result', cs.result],
                ].map(([label, body]) => (
                  <div key={label}>
                    <div className="eyebrow mb-2">{label}</div>
                    <p className="text-sm text-ink-400 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {cs.technology.map((t) => (
                  <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] text-ink-400">{t}</span>
                ))}
              </div>
            </Section>
          ))}
        </div>
      </section>

      <section className="section-pad py-24 text-center">
        <Button to="/contact" variant="primary">Start a Project</Button>
      </section>
    </div>
  )
}
