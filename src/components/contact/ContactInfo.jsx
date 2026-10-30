import { MapPin, Phone, Mail } from "lucide-react"
import { contactInfo, socialLinks } from "../../data/site"

export default function ContactInfo() {
  const rows = [
    { icon: Phone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, "")}` },
    { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: MapPin, label: "Address", value: contactInfo.address },
  ]
  return (
    <div className="flex flex-col gap-6">
      {/* Map placeholder — replace with an embedded map when the real location is known */}
      <div
        role="img"
        aria-label="Map placeholder showing the gym location"
        className="relative h-[260px] overflow-hidden rounded-[20px] border border-line bg-raised"
        style={{ backgroundImage: "linear-gradient(#2e2e2e 1px, transparent 1px), linear-gradient(90deg, #2e2e2e 1px, transparent 1px)", backgroundSize: "34px 34px, 64px 64px" }}
      >
        <div className="absolute -left-10 top-[170px] h-3.5 w-[700px] -rotate-[18deg] bg-disabled" />
        <MapPin size={44} fill="#ff5a1f" strokeWidth={1.5} className="absolute left-1/2 top-1/2 -ml-[22px] -mt-[44px] text-ink drop-shadow-[0_6px_20px_rgba(255,90,31,0.5)]" aria-hidden="true" />
        <p className="absolute bottom-3 left-5 text-xs text-muted">Map placeholder · {contactInfo.address.split(",")[0]}</p>
      </div>

      <div className="flex flex-col gap-5 rounded-[20px] border border-line bg-panel p-8">
        {rows.map(({ icon: Icon, label, value, href }) => (
          <div key={label} className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent"><Icon size={20} aria-hidden="true" /></span>
            <div>
              <p className="text-xs text-muted">{label}</p>
              {href ? <a href={href} className="font-semibold hover:text-accent">{value}</a> : <p className="font-semibold">{value}</p>}
            </div>
          </div>
        ))}
        <hr className="border-line" />
        <h2 className="text-xl font-bold leading-7">Opening hours</h2>
        <dl className="flex flex-col gap-2.5 text-sm">
          {contactInfo.hours.map(([day, time]) => (
            <div key={day} className="flex justify-between gap-4">
              <dt className="text-soft">{day}</dt>
              <dd className="font-semibold">{time}</dd>
            </div>
          ))}
        </dl>
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-soft">Follow us</span>
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label} className="flex h-10 w-10 items-center justify-center rounded-full border-[1.2px] border-muted text-xs font-bold transition-colors hover:border-accent hover:text-accent">{s.short}</a>
          ))}
        </div>
      </div>
    </div>
  )
}
