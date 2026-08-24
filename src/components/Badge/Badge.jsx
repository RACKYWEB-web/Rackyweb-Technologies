export default function Badge({ children, tone = 'default' }) {
  const tones = {
    default: 'border-white/10 text-ink-400 bg-white/[0.03]',
    electric: 'border-electric-500/30 text-electric-400 bg-electric-500/10',
    violet: 'border-violet-500/30 text-violet-400 bg-violet-500/10',
    cyan: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
  }
  return (
    <span className={`inline-flex items-center font-mono text-[10px] tracking-[0.14em] uppercase px-2.5 py-1 rounded-full border ${tones[tone]}`}>
      {children}
    </span>
  )
}
