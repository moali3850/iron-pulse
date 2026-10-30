import Container from "../common/Container"
import Reveal from "../common/Reveal"
import Photo from "../common/Photo"
import { images } from "../../data/images"

export default function StorySection() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[600px_1fr] lg:gap-20">
          <Reveal>
            <Photo src={images.personal} alt="A coach guiding a member through a kettlebell swing" className="h-[340px] rounded-[20px] sm:h-[440px] lg:h-[520px]" />
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-6">
            <p className="text-[13px] font-extrabold uppercase tracking-[2px] text-accent">Our mission</p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[40px] lg:leading-[48px]">Make strength accessible to everyone.</h2>
            <p className="text-lg leading-[30px] text-soft">We believe a great gym should feel welcoming, not intimidating. Our mission is to give every member the coaching, equipment and community they need to build lasting strength.</p>
            <p className="leading-[26px] text-soft">IRON PULSE started in a 200 m² garage with two coaches and a handful of barbells. Today we are a 3,000 m² training club, but the idea is unchanged: real coaching, honest progress and a team that has your back.</p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
