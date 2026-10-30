import { useEffect, useRef } from "react"
import { X } from "lucide-react"
import Photo from "../common/Photo"
import Badge from "../common/Badge"
import Button from "../common/Button"
import useBodyScrollLock from "../../hooks/useBodyScrollLock"

// Trainer profile overlay (Figma: "Trainer Profile Modal").
export default function TrainerModal({ trainer, onClose }) {
  const closeRef = useRef(null)
  const lastFocused = useRef(null)
  useBodyScrollLock(Boolean(trainer))

  useEffect(() => {
    if (!trainer) return
    lastFocused.current = document.activeElement
    closeRef.current?.focus()
    const onKey = (e) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", onKey)
    return () => {
      window.removeEventListener("keydown", onKey)
      lastFocused.current?.focus?.()
    }
  }, [trainer, onClose])

  if (!trainer) return null
  const first = trainer.name.split(" ")[0]
  const subject = encodeURIComponent(`Training with ${trainer.name}`)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-4"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div role="dialog" aria-modal="true" aria-labelledby="trainer-modal-title" className="relative my-auto grid w-full max-w-[960px] overflow-hidden rounded-3xl border border-line bg-panel shadow-modal md:grid-cols-[380px_1fr]">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close trainer profile"
          className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-raised text-white transition-colors hover:bg-accent hover:text-ink"
        >
          <X size={20} aria-hidden="true" />
        </button>
        <Photo src={trainer.image} alt={`Portrait of ${trainer.name}`} className="h-72 md:h-full md:min-h-[560px]" imgClassName="object-top" />
        <div className="flex flex-col gap-5 p-8 md:p-11">
          <p className="text-[13px] font-extrabold uppercase tracking-[2px] text-accent">{trainer.specialty}</p>
          <h2 id="trainer-modal-title" className="text-4xl font-extrabold leading-tight tracking-tight lg:text-[56px] lg:leading-[62px]">{trainer.name}</h2>
          <p className="leading-[26px] text-soft">{trainer.longBio}</p>
          <ul className="flex flex-wrap gap-x-10 gap-y-4">
            {[["Experience", trainer.experience], ["Clients coached", trainer.clients], ["Average rating", `${trainer.rating} ★`]].map(([label, value]) => (
              <li key={label}>
                <p className="text-[28px] font-bold leading-9">{value}</p>
                <p className="text-xs text-muted">{label}</p>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-2.5" aria-label="Certifications">
            {trainer.certifications.map((c) => <li key={c}><Badge>{c}</Badge></li>)}
          </ul>
          <div className="mt-auto flex flex-col gap-4 pt-4 sm:flex-row">
            <Button to={`/contact?subject=${subject}`}>Book a Session</Button>
            <Button to={`/contact?subject=${encodeURIComponent(`Message for ${trainer.name}`)}`} variant="secondary">Message {first}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
