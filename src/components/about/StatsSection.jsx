import { Trophy } from "lucide-react"
import Container from "../common/Container"
import Reveal from "../common/Reveal"
import { aboutStats, achievements } from "../../data/site"

export default function StatsSection() {
  return (
    <section className="py-14 lg:py-[72px]">
      <Container>
        <Reveal>
          <dl className="grid grid-cols-2 gap-y-10 rounded-[20px] border border-line bg-panel px-8 py-12 text-center lg:grid-cols-4 lg:px-16">
            {aboutStats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse items-center gap-1.5">
                <dt className="text-sm text-soft">{s.label}</dt>
                <dd className="text-5xl font-extrabold leading-[1.1] tracking-tight text-accent lg:text-[56px] lg:leading-[62px]">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {achievements.map((a) => (
            <li key={a} className="flex items-center gap-3.5 rounded-xl border border-line px-6 py-5 text-sm font-semibold">
              <Trophy size={22} className="shrink-0 text-accent" aria-hidden="true" /> {a}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
