import { Icon } from '../../utils/icons.jsx'

export default function ServiceCard({ service, onLearnMore }) {
  return (
    <div className="card card-hover p-6 md:p-7 flex flex-col h-full">
      <div className="w-11 h-11 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center text-electric-400 mb-5">
        <Icon name={service.icon} />
      </div>
      <h3 className="font-display font-semibold text-lg text-ink-50">{service.title}</h3>
      <p className="text-sm text-ink-400 leading-relaxed mt-2.5 flex-1">{service.short}</p>
      <button
        onClick={() => onLearnMore(service)}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-electric-400 hover:text-electric-300 transition-colors group"
      >
        Learn More
        <Icon name="arrow" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  )
}
