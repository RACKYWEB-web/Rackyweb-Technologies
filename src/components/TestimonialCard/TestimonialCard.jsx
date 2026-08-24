export default function TestimonialCard({ testimonial }) {
  return (
    <div className="card p-7 flex flex-col h-full">
      <span className="font-display text-4xl text-electric-500/40 leading-none">&ldquo;</span>
      <p className="text-ink-300 leading-relaxed italic flex-1 -mt-2">{testimonial.quote}</p>
      <div className="hairline my-5" />
      <div>
        <div className="font-display font-semibold text-ink-50">{testimonial.name}</div>
        <div className="text-xs text-ink-500 mt-0.5">{testimonial.role}</div>
      </div>
    </div>
  )
}
