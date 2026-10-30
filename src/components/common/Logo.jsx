import { Link } from "react-router-dom"

export default function Logo({ className = "" }) {
  return (
    <Link to="/" aria-label="IRON PULSE — home" className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-accent">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M2 12h5l3-8 4 16 3-8h5" stroke="#0b0b0b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="flex gap-1.5 text-xl font-extrabold leading-7 tracking-[2px]">
        <span className="text-white">IRON</span>
        <span className="text-accent">PULSE</span>
      </span>
    </Link>
  )
}
