import { Link } from "react-router-dom"

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-base font-bold leading-5 transition-colors duration-200 cursor-pointer select-none disabled:cursor-not-allowed"

const variants = {
  primary:
    "bg-accent text-ink hover:bg-accent-hover active:bg-accent-press disabled:bg-disabled disabled:text-muted",
  secondary:
    "border-[1.5px] border-white text-white hover:border-accent hover:bg-raised active:border-accent-press active:bg-panel disabled:border-line disabled:text-muted",
  ghost:
    "text-accent hover:bg-raised active:bg-panel disabled:text-muted",
  // Dark button for use on top of the orange CTA banner
  dark:
    "bg-ink text-white hover:bg-raised active:bg-panel",
}

// Renders a router <Link> when `to` is given, an <a> for `href`, otherwise a <button>.
export default function Button({
  variant = "primary",
  to,
  href,
  full = false,
  className = "",
  children,
  type = "button",
  ...rest
}) {
  const classes = `${base} ${variants[variant]} ${full ? "w-full" : ""} ${className}`
  if (to) return <Link to={to} className={classes} {...rest}>{children}</Link>
  if (href) return <a href={href} className={classes} {...rest}>{children}</a>
  return <button type={type} className={classes} {...rest}>{children}</button>
}
