import Section from '../Section/Section.jsx'

export default function ProcessStep({ step, index, isLast }) {
  return (
    <Section delay={index * 80} className="relative flex gap-6 md:gap-10 pb-12 last:pb-0">
      <div className="flex flex-col items-center shrink-0">
        <div className="w-14 h-14 rounded-2xl border border-electric-500/30 bg-electric-500/10 flex items-center justify-center font-mono text-electric-400 font-semibold">
          {step.number}
        </div>
        {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-electric-500/40 to-transparent mt-3" />}
      </div>
      <div className="pt-2">
        <h3 className="font-display font-semibold text-xl text-ink-50">{step.title}</h3>
        <p className="text-ink-400 mt-1.5">{step.body}</p>
      </div>
    </Section>
  )
}
