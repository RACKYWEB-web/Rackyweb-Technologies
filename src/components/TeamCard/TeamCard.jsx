export default function TeamCard({ member, onOpen }) {
  return (
    <button onClick={() => onOpen(member)} className="card card-hover p-6 text-left w-full flex flex-col items-start">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-500/25 to-violet-500/25 border border-white/10 flex items-center justify-center font-display text-lg text-ink-200 mb-4">
        {member.name.replace(/[[\]]/g, '').split(' ').map((w) => w[0]).slice(0, 2).join('')}
      </div>
      <h3 className="font-display font-semibold text-lg text-ink-50">{member.name}</h3>
      <p className="eyebrow mt-1">{member.role}</p>
      <p className="text-sm text-ink-400 leading-relaxed mt-3">{member.bio}</p>
    </button>
  )
}
