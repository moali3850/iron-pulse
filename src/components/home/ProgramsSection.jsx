import Container from "../common/Container"
import Reveal from "../common/Reveal"
import SectionHeading from "../common/SectionHeading"
import Button from "../common/Button"
import ProgramCard from "../programs/ProgramCard"
import { programs } from "../../data/programs"

export default function ProgramsSection() {
  const featured = programs.slice(0, 3)
  return (
    <section className="bg-panel py-16 lg:py-24">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Featured programs" title="Train with purpose. Pick your path." />
          <Button to="/programs" variant="secondary" className="shrink-0 self-start sm:self-auto">View All Programs</Button>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}><ProgramCard program={p} /></Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
