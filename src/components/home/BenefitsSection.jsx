import Container from "../common/Container"
import Reveal from "../common/Reveal"
import SectionHeading from "../common/SectionHeading"
import FeatureCard from "../common/FeatureCard"
import { benefits } from "../../data/site"

export default function BenefitsSection() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeading align="center" eyebrow="Why IRON PULSE" title="Everything you need to get stronger — and stay consistent." className="mb-12" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}><FeatureCard icon={b.icon} title={b.title} text={b.text} /></Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
