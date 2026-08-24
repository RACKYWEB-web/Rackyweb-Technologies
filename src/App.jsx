import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Services from './pages/Services/Services.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Team from './pages/Team/Team.jsx'
import Academy from './pages/Academy/Academy.jsx'
import Contact from './pages/Contact/Contact.jsx'
import { Icon } from './utils/icons.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])
  return null
}

function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!visible) return null
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full border border-white/10 bg-navy-900/90 backdrop-blur-md flex items-center justify-center text-ink-300 hover:text-electric-300 hover:border-electric-400/40 transition-colors shadow-card"
      aria-label="Back to top"
    >
      <Icon name="chevron" className="w-4 h-4 rotate-180" />
    </button>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <div className="section-pad py-32 text-center">
                <h1 className="font-display text-3xl text-ink-50">Page not found</h1>
              </div>
            }
          />
        </Routes>
      </MainLayout>
      <BackToTop />
    </>
  )
}
