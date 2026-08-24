import { Link } from 'react-router-dom'
import { company } from '../../data/company.js'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] mt-24">
      <div className="container-page section-pad py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-navy-950" style={{ background: 'linear-gradient(135deg, #4C8DFF, #7C5CFF)' }}>R</span>
            <span className="font-display font-semibold text-lg text-ink-50">{company.shortName}</span>
          </div>
          <p className="mt-4 text-sm text-ink-500 max-w-xs leading-relaxed">{company.description}</p>
        </div>
        <div>
          <div className="eyebrow mb-4">Navigate</div>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about" className="text-ink-400 hover:text-ink-100">About</Link></li>
            <li><Link to="/services" className="text-ink-400 hover:text-ink-100">Services</Link></li>
            <li><Link to="/projects" className="text-ink-400 hover:text-ink-100">Projects</Link></li>
            <li><Link to="/team" className="text-ink-400 hover:text-ink-100">Team</Link></li>
            <li><Link to="/consultation" className="text-ink-400 hover:text-ink-100">Consultation</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-4">Company</div>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/academy" className="text-ink-400 hover:text-ink-100">Rackyweb Tech Academy</Link></li>
            <li><Link to="/contact" className="text-ink-400 hover:text-ink-100">Contact</Link></li>
            <li><a href="#" className="text-ink-400 hover:text-ink-100">Privacy Policy</a></li>
            <li><a href="#" className="text-ink-400 hover:text-ink-100">Terms of Service</a></li>
            <li><Link to="/consultation" className="text-ink-400 hover:text-ink-100">Consultation</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-4">Connect</div>
          <ul className="space-y-2.5 text-sm">
            <li className="text-ink-400">{company.email}</li>
            {company.social.github && <li><a href={company.social.github} target="_blank" rel="noopener noreferrer" className="text-ink-400 hover:text-ink-100">GitHub</a></li>}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/[0.06]">
        <div className="container-page section-pad py-6 flex flex-col sm:flex-row gap-2 justify-between text-xs text-ink-600">
          <span>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span className="font-mono">Building technology that moves ideas forward.</span>
        </div>
      </div>
    </footer>
  )
}
