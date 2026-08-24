// A small, dependency-free icon set — keeps the bundle light and the visual
// language consistent (thin strokes, rounded joins) instead of pulling in
// an icon library.
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }

export function Icon({ name, className = 'w-5 h-5' }) {
  const props = { viewBox: '0 0 24 24', className, ...base }
  switch (name) {
    case 'code':
      return <svg {...props}><path d="M8 6 2 12l6 6M16 6l6 6-6 6M14 4l-4 16" /></svg>
    case 'terminal':
      return <svg {...props}><rect x="2.5" y="4" width="19" height="16" rx="2" /><path d="M6 9l4 3-4 3M13 15h5" /></svg>
    case 'spark':
      return <svg {...props}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" /><circle cx="12" cy="12" r="3" /></svg>
    case 'layout':
      return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 9v12" /></svg>
    case 'device':
      return <svg {...props}><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></svg>
    case 'gear':
      return <svg {...props}><circle cx="12" cy="12" r="3.2" /><path d="M12 2.5v3M12 18.5v3M4.2 6.2l2.1 2.1M17.7 15.7l2.1 2.1M2.5 12h3M18.5 12h3M4.2 17.8l2.1-2.1M17.7 8.3l2.1-2.1" /></svg>
    case 'cart':
      return <svg {...props}><circle cx="9" cy="20" r="1.3" fill="currentColor" /><circle cx="18" cy="20" r="1.3" fill="currentColor" /><path d="M2 3h2l2.6 12.4a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L21 7H6" /></svg>
    case 'compass':
      return <svg {...props}><circle cx="12" cy="12" r="9.5" /><path d="M15 9l-2 6-4-2 2-6 4 2Z" /></svg>
    case 'graduation':
      return <svg {...props}><path d="M2 8.5 12 4l10 4.5-10 4.5-10-4.5Z" /><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5M22 8.5V15" /></svg>
    case 'arrow':
      return <svg {...props}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
    case 'external':
      return <svg {...props}><path d="M14 4h6v6M20 4 10 14M6 6h5M6 6v12h12v-5" /></svg>
    case 'menu':
      return <svg {...props}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
    case 'close':
      return <svg {...props}><path d="M6 6l12 12M18 6 6 18" /></svg>
    case 'check':
      return <svg {...props}><path d="M4 12l5 5L20 6" /></svg>
    case 'chevron':
      return <svg {...props}><path d="M6 9l6 6 6-6" /></svg>
    default:
      return null
  }
}
