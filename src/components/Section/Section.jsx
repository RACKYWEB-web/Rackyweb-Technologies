import { useReveal } from '../../hooks/useReveal.js'

// A reusable scroll-reveal wrapper. Wrap any block in this to have it fade
// and rise into view once scrolled into the viewport.
export default function Section({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const [ref, visible] = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal-on-scroll ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
