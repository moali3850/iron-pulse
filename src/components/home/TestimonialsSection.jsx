import Container from "../common/Container"
import Reveal from "../common/Reveal"
import SectionHeading from "../common/SectionHeading"
import TestimonialCard from "./TestimonialCard"
import { testimonials } from "../../data/testimonials"

export default function TestimonialsSection() {
  return (
    <section className="bg-panel py-16 lg:py-24">
      <Container>
        <SectionHeading align="center" eyebrow="Member stories" title="Real people. Real progress." className="mb-12" />
        <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 100}><TestimonialCard testimonial={t} /></Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
