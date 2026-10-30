import { Star } from "lucide-react"

export default function TestimonialCard({ testimonial }) {
  const initials = testimonial.name.split(" ").map((n) => n[0]).join("")
  return (
    <figure className="flex h-full flex-col gap-5 rounded-[20px] border border-line bg-panel p-8">
      <div className="flex gap-1 text-accent" role="img" aria-label="5 out of 5 stars">
        {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={18} fill="currentColor" strokeWidth={1.5} aria-hidden="true" />)}
      </div>
      <blockquote className="leading-[26px]">{testimonial.quote}</blockquote>
      <figcaption className="mt-auto flex items-center gap-3.5">
        <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#3d2b24] to-[#121212] text-sm font-bold text-accent">{initials}</span>
        <span>
          <span className="block text-sm font-bold">{testimonial.name}</span>
          <span className="block text-xs text-muted">{testimonial.role}</span>
        </span>
      </figcaption>
    </figure>
  )
}
