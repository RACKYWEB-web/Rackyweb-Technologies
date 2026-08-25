import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { company } from '../../data/company.js'
import { Icon } from '../../utils/icons.jsx'
import Button from '../Button/Button.jsx'
import rackywebImage from '../../assets/rackyweb.jpg'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/team', label: 'Team' },
  { to: '/academy', label: 'Academy' },
  { to: '/contact', label: 'Contact' },
]

const projectLinks = [
  {
    label: 'Rackyweb Global Media',
    description: 'Rackyweb media & digital platform',
    href: 'https://rackyweb-web.github.io/rackyweb-global-media-/',
  },
  {
    label: 'FUTO ICPC SAV Portal',
    description: 'Student portal & digital platform',
    href: 'https://rackyweb-web.github.io/futo-icpc-sav-portal/',
  },
  {
    label: 'Rackyweb Nexus',
    description: 'Rackyweb digital technology project',
    href: 'https://rackyweb-web.github.io/Rackyweb-nexus/',
  },
  {
    label: 'Edward Prince Portfolio',
    description: 'Founder portfolio & selected work',
    href: 'https://rackyweb-web.github.io/Edward-portfolio/',
  },
  {
    label: 'View All Projects',
    description: 'Explore all Rackyweb projects',
    to: '/projects',
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)

  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    setOpen(false)
    setProjectsOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        ${
          scrolled
            ? 'pt-3'
            : 'pt-4'
        }
      `}
    >

      <div
        className={`
          container-page section-pad
          transition-all duration-500
        `}
      >

        <div
          className={`
            relative
            flex items-center justify-between
            h-[68px]
            px-4 md:px-5
            rounded-2xl
            border
            transition-all duration-500
            ${
              scrolled
                ? 'bg-navy-950/80 backdrop-blur-2xl border-white/[0.10] shadow-[0_20px_60px_rgba(0,0,0,0.35)]'
                : 'bg-navy-950/40 backdrop-blur-xl border-white/[0.06]'
            }
          `}
        >

          {/* =========================
              BRAND
          ========================== */}

       <Link
  to="/"
  className="group flex items-center gap-3 min-w-0"
  aria-label={`${company.name} home`}
>
  <div className="relative">

    <div
      className="
        absolute inset-0
        rounded-xl
        bg-electric-500/30
        blur-xl
        opacity-0
        group-hover:opacity-100
        transition-opacity duration-500
      "
    />

    <div
      className="
        relative
        w-11 h-11
        rounded-xl
        flex items-center justify-center
        border border-white/10
        bg-white/[0.03]
        shadow-[0_0_25px_rgba(76,141,255,0.18)]
        transition-all duration-300
        group-hover:scale-105
        group-hover:border-electric-400/30
        overflow-hidden
      "
    >
      <img
        src={rackywebImage}
        alt="Rackyweb Technologies"
        className="w-9 h-9 object-contain"
      />
    </div>

  </div>

  <div className="hidden sm:block min-w-0">

    <div className="font-display font-semibold text-[15px] text-ink-50 tracking-tight leading-none">
      {company.shortName}
    </div>

    <div className="flex items-center gap-1.5 mt-1.5">

      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(95,240,220,.8)]" />

      <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-ink-600">
        Technology Company
      </span>

    </div>

  </div>
</Link>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}

          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Primary"
          >

            {links.slice(0, 3).map((link) => (

              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `
                  relative
                  px-3.5 py-2.5
                  rounded-lg
                  text-[13px]
                  font-medium
                  transition-all duration-300
                  ${
                    isActive
                      ? 'text-ink-50 bg-white/[0.06]'
                      : 'text-ink-500 hover:text-ink-100 hover:bg-white/[0.035]'
                  }
                `}
              >

                {link.label}

                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    isActive
                      ? 'absolute left-1/2 -bottom-[1px] -translate-x-1/2 w-5 h-[2px] rounded-full bg-electric-400 shadow-[0_0_10px_rgba(76,141,255,.8)]'
                      : 'hidden'
                  }
                />

              </NavLink>

            ))}


            {/* PROJECTS DROPDOWN */}

            <div
              className="relative"
              onMouseEnter={() => setProjectsOpen(true)}
              onMouseLeave={() => setProjectsOpen(false)}
            >

              <button
                type="button"
                onClick={() => setProjectsOpen((value) => !value)}
                className={`
                  flex items-center gap-2
                  px-3.5 py-2.5
                  rounded-lg
                  text-[13px]
                  font-medium
                  transition-all duration-300
                  ${
                    location.pathname === '/projects'
                      ? 'text-ink-50 bg-white/[0.06]'
                      : 'text-ink-500 hover:text-ink-100 hover:bg-white/[0.035]'
                  }
                `}
              >

                Projects

                <span
                  className={`
                    text-[9px]
                    transition-transform duration-300
                    ${projectsOpen ? 'rotate-180' : ''}
                  `}
                >
                  ▼
                </span>

              </button>


              <div
                className={`
                  absolute
                  top-full
                  left-1/2
                  -translate-x-1/2
                  pt-3
                  transition-all duration-300
                  ${
                    projectsOpen
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }
                `}
              >

                <div className="w-[340px] rounded-2xl border border-white/[0.10] bg-navy-950/95 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.55)] p-2">

                  <div className="px-4 py-3 border-b border-white/[0.06]">

                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-electric-400">
                      Our Work
                    </span>

                    <p className="text-xs text-ink-500 mt-1">
                      Explore what Rackyweb has built.
                    </p>

                  </div>


                  <div className="py-2">

                    {projectLinks.map((project) => {

                      const content = (
                        <div className="group/item flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/[0.05] transition-colors">

                          <div className="w-9 h-9 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-electric-400 group-hover/item:border-electric-400/30 transition-colors">
                            ↗
                          </div>

                          <div className="flex-1">

                            <div className="text-sm font-medium text-ink-200 group-hover/item:text-ink-50 transition-colors">
                              {project.label}
                            </div>

                            <div className="text-[11px] text-ink-600 mt-0.5">
                              {project.description}
                            </div>

                          </div>

                          <span className="text-ink-700 group-hover/item:text-electric-400 transition-colors">
                            →
                          </span>

                        </div>
                      )

                      if (project.href) {
                        return (
                          <a
                            key={project.label}
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {content}
                          </a>
                        )
                      }

                      return (
                        <Link
                          key={project.label}
                          to={project.to}
                        >
                          {content}
                        </Link>
                      )
                    })}

                  </div>

                </div>

              </div>

            </div>


            {links.slice(4).map((link) => (

              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `
                  relative
                  px-3.5 py-2.5
                  rounded-lg
                  text-[13px]
                  font-medium
                  transition-all duration-300
                  ${
                    isActive
                      ? 'text-ink-50 bg-white/[0.06]'
                      : 'text-ink-500 hover:text-ink-100 hover:bg-white/[0.035]'
                  }
                `}
              >

                {link.label}

              </NavLink>

            ))}


            {/* CONSULTATION */}

            <NavLink
              to="/consultation"
              className={({ isActive }) => `
                ml-1
                px-3.5 py-2.5
                rounded-lg
                text-[13px]
                font-medium
                border
                transition-all duration-300
                ${
                  isActive
                    ? 'text-electric-300 border-electric-400/25 bg-electric-400/[0.08]'
                    : 'text-electric-400 border-electric-400/10 hover:border-electric-400/25 hover:bg-electric-400/[0.05]'
                }
              `}
            >
              Consultation
            </NavLink>

          </nav>


          {/* =========================
              DESKTOP CTA
          ========================== */}

          <div className="hidden lg:flex items-center gap-3">

            <div className="hidden xl:flex items-center gap-2 mr-1">

              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(95,240,220,.8)]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-ink-600">
                Available
              </span>

            </div>

            <Button
              to="/contact"
              variant="primary"
              className="text-[12px] px-5 py-2.5 shadow-[0_0_25px_rgba(76,141,255,0.15)]"
            >
              Start a Project →
            </Button>

          </div>


          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}

          <button
            type="button"
            className="
              lg:hidden
              w-10 h-10
              rounded-xl
              border border-white/10
              bg-white/[0.03]
              text-ink-200
              flex items-center justify-center
              hover:bg-white/[0.06]
              transition-colors
            "
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >

            <Icon
              name={open ? 'close' : 'menu'}
              className="w-5 h-5"
            />

          </button>

        </div>


        {/* =========================
            MOBILE NAVIGATION
        ========================== */}

        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all duration-500
            ${
              open
                ? 'max-h-[760px] opacity-100 mt-2'
                : 'max-h-0 opacity-0 mt-0'
            }
          `}
        >

          <nav
            className="
              rounded-2xl
              border border-white/[0.08]
              bg-navy-950/95
              backdrop-blur-2xl
              shadow-[0_25px_70px_rgba(0,0,0,0.4)]
              p-3
            "
            aria-label="Mobile"
          >

            {links.map((link) => (

              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `
                  flex items-center justify-between
                  px-4 py-3.5
                  rounded-xl
                  text-sm
                  font-medium
                  transition-all
                  ${
                    isActive
                      ? 'text-ink-50 bg-white/[0.06]'
                      : 'text-ink-400 hover:text-ink-100 hover:bg-white/[0.035]'
                  }
                `}
              >

                {link.label}

                <span className="text-ink-700">
                  →
                </span>

              </NavLink>

            ))}


            {/* MOBILE PROJECTS */}

            <div className="mt-2 pt-2 border-t border-white/[0.06]">

              <button
                type="button"
                onClick={() => setProjectsOpen((value) => !value)}
                className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium text-ink-400 hover:text-ink-100 hover:bg-white/[0.035]"
              >

                <span>
                  Project Links
                </span>

                <span
                  className={`transition-transform ${projectsOpen ? 'rotate-180' : ''}`}
                >
                  ▼
                </span>

              </button>


              {projectsOpen && (

                <div className="px-2 pb-2">

                  {projectLinks.map((project) => {

                    if (project.href) {
                      return (
                        <a
                          key={project.label}
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-3 py-3 rounded-lg hover:bg-white/[0.04]"
                        >

                          <div className="text-xs text-ink-200">
                            {project.label}
                          </div>

                          <div className="text-[10px] text-ink-600 mt-1">
                            {project.description}
                          </div>

                        </a>
                      )
                    }

                    return (
                      <Link
                        key={project.label}
                        to={project.to}
                        className="block px-3 py-3 rounded-lg hover:bg-white/[0.04]"
                      >

                        <div className="text-xs text-ink-200">
                          {project.label}
                        </div>

                        <div className="text-[10px] text-ink-600 mt-1">
                          {project.description}
                        </div>

                      </Link>
                    )
                  })}

                </div>

              )}

            </div>


            {/* MOBILE CTA */}

            <div className="mt-3 pt-3 border-t border-white/[0.06]">

              <div className="flex items-center gap-2 px-3 mb-3">

                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(95,240,220,.8)]" />

                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-600">
                  Currently accepting projects
                </span>

              </div>


              <Button
                to="/contact"
                variant="primary"
                className="w-full"
              >
                Start a Project →
              </Button>

            </div>

          </nav>

        </div>

      </div>

    </header>
  )
}