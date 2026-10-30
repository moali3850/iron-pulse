import { useState } from "react"
import Container from "../common/Container"
import Reveal from "../common/Reveal"
import SectionHeading from "../common/SectionHeading"
import Button from "../common/Button"
import TrainerCard from "../trainers/TrainerCard"
import TrainerModal from "../trainers/TrainerModal"
import { trainers } from "../../data/trainers"

export default function TrainersSection() {
  const [selected, setSelected] = useState(null)
  return (
    <section className="bg-panel py-16 lg:py-24">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Featured trainers" title="Coaches who care about your results." />
          <Button to="/trainers" variant="secondary" className="shrink-0 self-start sm:self-auto">Meet All Trainers</Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t, i) => (
            <Reveal key={t.id} delay={i * 80}><TrainerCard trainer={t} onView={setSelected} /></Reveal>
          ))}
        </div>
      </Container>
      <TrainerModal trainer={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
