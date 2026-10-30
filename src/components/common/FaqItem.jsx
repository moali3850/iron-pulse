import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FaqItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={`rounded-xl border transition-colors ${open ? "border-accent bg-raised" : "border-line bg-panel hover:border-muted"}`}>
      <h3>
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left text-lg font-bold sm:px-7"
        >
          {question}
          <ChevronDown size={22} className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-accent" : "text-soft"}`} aria-hidden="true" />
        </button>
      </h3>
      <div className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-sm leading-[22px] text-soft sm:px-7">{answer}</p>
        </div>
      </div>
    </div>
  )
}
