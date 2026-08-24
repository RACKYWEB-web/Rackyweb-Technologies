import Badge from '../Badge/Badge.jsx'
import { Icon } from '../../utils/icons.jsx'

export default function ProjectCard({ project }) {
  return (
    <div className="card card-hover overflow-hidden group flex flex-col h-full">
      <div className="aspect-[16/10] bg-gradient-to-br from-navy-700 to-navy-800 relative overflow-hidden flex items-center justify-center">
        <div className="grid-lines absolute inset-0 opacity-40" />
        <span className="relative font-display text-ink-500/50 text-sm">Project Preview</span>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <Badge tone="electric">{project.category}</Badge>
        <h3 className="font-display font-semibold text-xl text-ink-50 mt-3">{project.title}</h3>
        <p className="text-sm text-ink-400 leading-relaxed mt-2 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.technologies.map((t) => (
            <span key={t} className="font-mono text-[10px] px-2 py-1 rounded-md bg-white/[0.04] text-ink-500">{t}</span>
          ))}
        </div>
        {project.link ? (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-electric-400 hover:text-electric-300 transition-colors">
            View Project <Icon name="external" className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink-500">
            Coming Soon
          </span>
        )}
      </div>
    </div>
  )
}
