import { Link, useParams } from "react-router-dom"
import Container from "../components/common/Container"
import Reveal from "../components/common/Reveal"
import SectionHeading from "../components/common/SectionHeading"
import Photo from "../components/common/Photo"
import Badge from "../components/common/Badge"
import Button from "../components/common/Button"
import CheckList from "../components/common/CheckList"
import DataTable from "../components/common/DataTable"
import FaqList from "../components/common/FaqList"
import CtaBanner from "../components/common/CtaBanner"
import Icon from "../components/common/Icon"
import ProgramGlance from "../components/programs/ProgramGlance"
import NotFound from "./NotFound"
import { programs } from "../data/programs"

export default function ProgramDetails() {
  const { id } = useParams()
  const program = programs.find((p) => p.id === id)
  if (!program) return <NotFound message="We couldn’t find that program." />

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Photo src={program.image} alt={`${program.title} training at IRON PULSE`} className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/65 to-ink/25" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
        <Container className="relative">
          <div className="flex min-h-[480px] flex-col justify-center gap-5 py-16 lg:min-h-[520px]">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2.5 text-sm font-semibold">
              <Link to="/programs" className="text-soft hover:text-white">Programs</Link>
              <span className="text-muted" aria-hidden="true">/</span>
              <span className="text-accent" aria-current="page">{program.title}</span>
            </nav>
            <Badge className="self-start">{program.level}</Badge>
            <h1 className="max-w-[700px] text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[56px] lg:leading-[62px]">{program.title}</h1>
            <p className="max-w-[560px] text-lg leading-[30px] text-soft">{program.heroText}</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button to="/membership">Join Program</Button>
              <Button to="/programs" variant="secondary">Back to Programs</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_400px] lg:gap-20">
            <Reveal className="flex flex-col gap-6">
              <p className="text-[13px] font-extrabold uppercase tracking-[2px] text-accent">Program overview</p>
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[40px] lg:leading-[48px]">{program.overviewTitle}</h2>
              <p className="text-lg leading-[30px] text-soft">{program.overview}</p>
              <h3 className="pt-2 text-xl font-bold leading-7">What you will gain</h3>
              <CheckList items={program.benefits} />
            </Reveal>
            <Reveal delay={120}><ProgramGlance glance={program.glance} /></Reveal>
          </div>
        </Container>
      </section>

      {/* Schedule */}
      <section className="bg-panel py-16 lg:py-20">
        <Container>
          <SectionHeading eyebrow="Training schedule" title="A sample week." text="Sessions are adjusted to your level during your first assessment." className="mb-10" />
          <DataTable
            caption={`${program.title} sample weekly schedule`}
            columns={[{ label: "Day" }, { label: "Focus" }, { label: "Duration" }, { label: "Intensity" }]}
            rows={program.schedule}
          />
        </Container>
      </section>

      {/* Equipment */}
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading eyebrow="What you need" title="Required equipment." text="Everything is provided at IRON PULSE — just bring a towel and water." className="mb-10" />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {program.equipment.map((item) => (
              <li key={item} className="flex items-center gap-4 rounded-2xl border border-line bg-panel p-7 font-semibold">
                <Icon name="dumbbell" className="shrink-0 text-accent" /> {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-panel py-16 lg:py-20">
        <Container>
          <SectionHeading align="center" eyebrow="FAQ" title="Frequently asked questions." className="mb-10" />
          <FaqList items={program.faqs} />
        </Container>
      </section>

      <CtaBanner title={`Ready to start ${program.title}?`} text="Join the program today and get your first coached session this week." label="Join Program" to="/membership" />
    </>
  )
}
