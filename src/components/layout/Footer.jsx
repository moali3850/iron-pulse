import { Link } from "react-router-dom"
import { MapPin, Phone, Mail } from "lucide-react"
import Container from "../common/Container"
import Logo from "../common/Logo"
import { footerColumns, contactInfo, socialLinks } from "../../data/site"

export default function Footer() {
  return (
    <footer className="bg-panel">
      <Container className="py-16 lg:py-[72px]">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[340px_1fr_1fr_1fr] lg:justify-between lg:gap-16">
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="text-sm leading-[22px] text-soft">
              Train harder. Recover smarter. Become the strongest version of yourself at IRON PULSE.
            </p>
            <ul className="flex gap-3">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-[1.2px] border-muted text-xs font-bold transition-colors hover:border-accent hover:text-accent"
                  >
                    {s.short}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="flex flex-col gap-3.5">
              <h2 className="text-[13px] font-extrabold uppercase tracking-[2px]">{col.title}</h2>
              {col.links.map((link) => (
                <Link key={link.label} to={link.to} className="text-sm text-soft transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>
          ))}

          <div className="flex flex-col gap-3.5">
            <h2 className="text-[13px] font-extrabold uppercase tracking-[2px]">Contact</h2>
            <p className="flex items-center gap-3 text-sm text-soft"><MapPin size={18} className="shrink-0 text-accent" aria-hidden="true" />{contactInfo.address}</p>
            <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-sm text-soft hover:text-white"><Phone size={18} className="shrink-0 text-accent" aria-hidden="true" />{contactInfo.phone}</a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-sm text-soft hover:text-white"><Mail size={18} className="shrink-0 text-accent" aria-hidden="true" />{contactInfo.email}</a>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-line pt-8 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} IRON PULSE Fitness. All rights reserved.</p>
          <p>Privacy Policy &nbsp;·&nbsp; Terms of Service</p>
        </div>
      </Container>
    </footer>
  )
}
