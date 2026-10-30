import Container from "../common/Container"
import Reveal from "../common/Reveal"
import SectionHeading from "../common/SectionHeading"
import Photo from "../common/Photo"
import { facilities, equipmentTags } from "../../data/site"

export default function FacilitiesSection() {
  return (
    <section className="bg-panel py-16 lg:py-24">
      <Container>
        <SectionHeading align="center" eyebrow="Facilities & equipment" title="Train in a space designed for performance." className="mb-12" />
        <div className="grid gap-6 md:grid-cols-3">
          {facilities.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <article className="group relative h-[340px] overflow-hidden rounded-[20px]">
                <Photo src={f.image} alt={`${f.title} at IRON PULSE`} className="absolute inset-0" imgClassName="transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/95" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-6">
                  <h3 className="text-[28px] font-bold leading-9">{f.title}</h3>
                  <p className="text-sm text-soft">{f.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {equipmentTags.map((t) => (
            <li key={t} className="rounded-full border-[1.5px] border-line px-5 py-2.5 text-sm font-bold text-soft">{t}</li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
