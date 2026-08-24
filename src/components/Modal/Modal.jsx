import { useEffect } from 'react'
import { Icon } from '../../utils/icons.jsx'

export default function Modal({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-navy-950/90 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto card p-6 md:p-10 reveal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-ink-400 hover:text-ink-50 hover:border-electric-400/50 transition-colors"
          aria-label="Close"
        >
          <Icon name="close" className="w-4 h-4" />
        </button>
        {children}
      </div>
    </div>
  )
}
