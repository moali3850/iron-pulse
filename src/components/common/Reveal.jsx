import useInView from "../../hooks/useInView"

// Fade + slide-up when scrolled into view. `delay` (ms) staggers siblings.
export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const [ref, visible] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
