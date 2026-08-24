import { useEffect, useState } from 'react'
import { useReveal } from '../../hooks/useReveal.js'

export default function Counter({ value, suffix = '', duration = 1400 }) {
  const [ref, visible] = useReveal(0.4)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!visible) return
    const start = performance.now()
    let raf
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(value * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [visible, value, duration])

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-semibold text-ink-50 tabular-nums">
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}
