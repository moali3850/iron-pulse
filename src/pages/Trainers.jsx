import { useMemo, useState } from "react"
import PageHero from "../components/common/PageHero"
import Container from "../components/common/Container"
import Reveal from "../components/common/Reveal"
import SectionHeading from "../components/common/SectionHeading"
import CtaBanner from "../components/common/CtaBanner"
import TrainerFilter from "../components/trainers/TrainerFilter"
import TrainerCard from "../components/trainers/TrainerCard"
import TrainerModal from "../components/trainers/TrainerModal"
import CompareTable from "../components/trainers/CompareTable"
import { trainers } from "../data/trainers"

export default function Trainers() {
  const [category, setCategory] = useState("All")
  const [selected, setSelected] = useState(null)
  const filtered = useMemo(() => trainers.filter((t) => category === "All" || t.category === category), [category])

  return (
    <>
      <PageHero eyebrow="Trainers" title="Meet your coaches." text="Certified, experienced and genuinely invested in your progress. Filter by specialty and compare to find your match." />
      <section className="pb-16 pt-6 lg:pb-24">
        <Container>
          <TrainerFilter category={category} onCategory={setCategory} count={filtered.length} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((t, i) => (
              <Reveal key={t.id} delay={i * 80}><TrainerCard trainer={t} onView={setSelected} /></Reveal>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-panel py-16 lg:py-20">
        <Container>
          <SectionHeading eyebrow="Compare" title="Find the right fit at a glance." className="mb-10" />
          <CompareTable trainers={trainers} />
        </Container>
      </section>
      <CtaBanner title="Not sure who to choose?" text="Book a free consultation and we will match you with the right coach." label="Book Free Consultation" to="/contact?subject=Free%20consultation" />
      <TrainerModal trainer={selected} onClose={() => setSelected(null)} />
    </>
  )
}
