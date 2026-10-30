export default function Badge({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center rounded-full bg-accent/15 px-3 py-1.5 text-xs font-extrabold text-accent ${className}`}>
      {children}
    </span>
  )
}
