import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { company } from '../../data/company.js'
import { Icon } from '../../utils/icons.jsx'
import Button from '../Button/Button.jsx'


const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/team', label: 'Team' },
  { to: '/academy', label: 'Academy' },
  { to: '/contact', label: 'Contact' },
  { to: '/consultation', label: 'Consultation' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [navigate])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-950/85 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.3)]' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-page section-pad flex items-center justify-between h-18 py-4">
        <Link to="/" className="flex items-center gap-2.5" aria-label={`${company.name} home`}>
          <span className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-navy-950" style={{ background: 'linear-gradient(135deg, #4C8DFF, #7C5CFF)' }}>
           <i>RW</i>
          </span>
          <span className="font-display font-semibold text-lg text-ink-50 tracking-tight">{company.shortName}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-ink-50' : 'text-ink-400 hover:text-ink-200'}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact" variant="primary" className="text-sm px-5 py-2.5">Start a Project</Button>
        </div>

        <button className="lg:hidden text-ink-200" onClick={() => setOpen((o) => !o)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          <Icon name={open ? 'close' : 'menu'} className="w-6 h-6" />
        </button>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${open ? 'max-h-[520px]' : 'max-h-0'}`}>
        <nav className="flex flex-col gap-1 px-6 pb-6" aria-label="Mobile">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `py-3 text-sm font-medium border-b border-white/5 ${isActive ? 'text-ink-50' : 'text-ink-400'}`}>
              {l.label}
            </NavLink>
          ))}
          <Button to="/contact" variant="primary" className="w-full mt-4">Start a Project</Button>
        </nav>
      </div>
    </header>
  )
}
