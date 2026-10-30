import { Check } from "lucide-react"
import Badge from "../common/Badge"
import Button from "../common/Button"
import { getMonthlyPrice } from "../../utils/pricing"

export default function MembershipCard({ plan, billing = "monthly" }) {
  const price = getMonthlyPrice(plan.price, billing)
  const subject = encodeURIComponent(`Membership enquiry – ${plan.name} plan`)
  return (
    <article
      className={`flex h-full flex-col gap-5 rounded-[20px] border p-8 ${
        plan.recommended ? "border-2 border-accent bg-raised shadow-glow-lg" : "border-line bg-panel"
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-[28px] font-bold leading-9">{plan.name}</h3>
        {plan.recommended && <Badge>MOST POPULAR</Badge>}
      </div>
      <p className="flex items-end gap-1.5">
        <span className="text-5xl font-extrabold leading-[1.1] tracking-tight lg:text-[56px] lg:leading-[62px]">${price}</span>
        <span className="pb-2 text-sm text-muted">/ month{billing === "yearly" ? ", billed yearly" : ""}</span>
      </p>
      <p className="text-sm leading-[22px] text-soft">{plan.description}</p>
      <hr className="border-line" />
      <ul className="flex flex-col gap-3.5">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm">
            <Check size={18} strokeWidth={2.6} className="shrink-0 text-accent" aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>
      <Button to={`/contact?subject=${subject}`} variant={plan.recommended ? "primary" : "secondary"} full className="mt-auto">
        Join {plan.name}
      </Button>
    </article>
  )
}
