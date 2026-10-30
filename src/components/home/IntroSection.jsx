import Container from "../common/Container"
import Reveal from "../common/Reveal"
import Photo from "../common/Photo"
import CheckList from "../common/CheckList"
import Button from "../common/Button"
import { images } from "../../data/images"
import { introChecks } from "../../data/site"

export default function IntroSection() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[600px_1fr] lg:gap-20">
          <Reveal>
            <Photo src={images.gym} alt="Spacious IRON PULSE gym floor with racks and orange LED lighting" className="h-[320px] rounded-[20px] sm:h-[420px] lg:h-[460px]" />
          </Reveal>
          <Reveal delay={120} className="flex flex-col items-start gap-6">
            <p className="text-[13px] font-extrabold uppercase tracking-[2px] text-accent">Welcome to IRON PULSE</p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[40px] lg:leading-[48px]">A gym built for people who show up.</h2>
            <p className="text-lg leading-[30px] text-soft">
              No crowded floors, no guesswork. We combine premium equipment, evidence-based coaching and a community that pushes you forward — from your very first session.
            </p>
            <CheckList items={introChecks} />
            <Button to="/about" variant="ghost" className="-ml-3">Our Story →</Button>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
