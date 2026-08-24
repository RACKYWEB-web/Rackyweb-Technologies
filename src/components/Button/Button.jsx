import { Link } from 'react-router-dom'

export default function Button({ to, href, onClick, variant = 'primary', children, className = '', type = 'button' }) {
  const cls = { primary: 'btn-primary', outline: 'btn-outline', ghost: 'btn-ghost' }[variant]
  const classes = `${cls} ${className}`
  if (to) return <Link to={to} className={classes}>{children}</Link>
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{children}</a>
  return <button type={type} onClick={onClick} className={classes}>{children}</button>
}
