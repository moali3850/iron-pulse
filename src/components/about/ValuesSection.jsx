import Container from "../common/Container"
import Reveal from "../common/Reveal"
import SectionHeading from "../common/SectionHeading"
import FeatureCard from "../common/FeatureCard"
import { values, philosophy } from "../../data/site"

export default function ValuesSection() {
  return (
    <section className="bg-panel py-16 lg:py-24">
      <Container>
        <SectionHeading align="center" eyebrow="Our values" title="What we stand for." className="mb-12" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}><FeatureCard icon={v.icon} title={v.title} text={v.text} /></Reveal>
          ))}
        </div>
        <h3 className="sr-only">Training philosophy</h3>
        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
          {philosophy.map((p) => (
            <li key={p.n} className="flex flex-col gap-3">
              <span className="text-5xl font-extrabold leading-[1.1] tracking-tight text-accent lg:text-[56px] lg:leading-[62px]">{p.n}</span>
              <span className="text-[28px] font-bold leading-9">{p.title}</span>
              <span className="text-sm leading-[22px] text-soft">{p.text}</span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
