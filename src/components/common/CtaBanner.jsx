import Container from "./Container"
import Reveal from "./Reveal"
import Button from "./Button"

export default function CtaBanner({ title, text, label, to }) {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 rounded-[20px] bg-gradient-to-r from-accent to-accent-hover px-8 py-12 text-ink md:flex-row md:items-center lg:px-16 lg:py-14">
            <div className="flex flex-col gap-2.5">
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[40px] lg:leading-[48px]">{title}</h2>
              <p className="text-lg leading-[30px]">{text}</p>
            </div>
            <Button to={to} variant="dark" className="shrink-0">{label}</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
