import { useMemo, useState } from "react"
import PageHero from "../components/common/PageHero"
import Container from "../components/common/Container"
import Reveal from "../components/common/Reveal"
import Button from "../components/common/Button"
import CtaBanner from "../components/common/CtaBanner"
import ProgramFilter from "../components/programs/ProgramFilter"
import ProgramCard from "../components/programs/ProgramCard"
import { programs } from "../data/programs"

export default function Programs() {
  const [category, setCategory] = useState("All")
  const [level, setLevel] = useState("All")

  const filtered = useMemo(
    () => programs.filter((p) => (category === "All" || p.category === category) && (level === "All" || p.level === level)),
    [category, level]
  )

  const reset = () => { setCategory("All"); setLevel("All") }

  return (
    <>
      <PageHero eyebrow="Programs" title="Find the program that fits you." text="Five coach-led programs for every goal and fitness level. Filter by category and pick where to start." />
      <section className="pb-16 pt-6 lg:pb-24">
        <Container>
          <ProgramFilter category={category} onCategory={setCategory} level={level} onLevel={setLevel} count={filtered.length} />

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 80}><ProgramCard program={p} /></Reveal>
            ))}
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center gap-4 rounded-[20px] border-[1.5px] border-dashed border-muted p-10 text-center md:col-span-2 lg:col-span-3">
                <h3 className="text-[28px] font-bold leading-9">No programs match these filters</h3>
                <p className="text-soft">Try a different category or level.</p>
                <Button variant="secondary" onClick={reset}>Clear filters</Button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 rounded-[20px] border-[1.5px] border-dashed border-muted p-8 text-center">
                <h3 className="text-[28px] font-bold leading-9">Not sure where to start?</h3>
                <p className="max-w-[300px] text-sm leading-[22px] text-soft">Book a free consultation and a coach will recommend the right program.</p>
                <Button to="/contact?subject=Free%20consultation">Book Free Consultation</Button>
              </div>
            )}
          </div>
        </Container>
      </section>
      <CtaBanner title="Not ready to commit?" text="Try any program free for 7 days — no card required." label="Start Free Trial" to="/contact?subject=Free%20trial" />
    </>
  )
}
