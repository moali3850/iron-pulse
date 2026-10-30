import { YEARLY_DISCOUNT } from "../../data/memberships"

export default function BillingToggle({ billing, onChange }) {
  const options = [
    { id: "monthly", label: "Monthly" },
    { id: "yearly", label: `Yearly · Save ${YEARLY_DISCOUNT * 100}%` },
  ]
  return (
    <div role="group" aria-label="Billing period" className="inline-flex gap-1 rounded-full border border-line bg-panel p-1.5">
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          aria-pressed={billing === o.id}
          onClick={() => onChange(o.id)}
          className={`rounded-full px-5 py-3 text-sm font-bold transition-colors sm:px-6 ${billing === o.id ? "bg-accent text-ink" : "text-soft hover:text-white"}`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
