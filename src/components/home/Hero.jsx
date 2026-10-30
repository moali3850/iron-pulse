import Container from "../common/Container"
import Button from "../common/Button"
import Photo from "../common/Photo"
import { images } from "../../data/images"
import { heroStats } from "../../data/site"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Photo — right side on desktop, full-bleed behind the text on smaller screens */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[68%]" aria-hidden="false">
        <Photo src={images.hero} alt="Athlete performing a heavy deadlift in a dark gym with orange lighting" className="h-full w-full" imgClassName="object-[60%_center]" />
        <div className="absolute inset-0 bg-ink/70 lg:bg-transparent lg:bg-gradient-to-r lg:from-ink lg:via-ink/55 lg:to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-ink" />

      <Container className="relative">
        <div className="flex min-h-[640px] flex-col justify-center gap-7 py-20 lg:min-h-[780px]">
          <p className="text-[13px] font-extrabold uppercase tracking-[2px] text-accent">Strength · Power · Community</p>
          <h1 className="max-w-[720px] text-5xl font-extrabold uppercase leading-[1.05] tracking-[-1px] sm:text-6xl lg:text-[80px] lg:leading-[84px] lg:tracking-[-2px]">
            Forge your<br />strongest self.
          </h1>
          <p className="max-w-[540px] text-lg leading-[30px] text-soft">
            IRON PULSE is a premium training club with expert coaches, elite equipment and programs built around your goals — whether you lift, run or just start.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button to="/programs">Explore Programs</Button>
            <Button to="/membership" variant="secondary">View Membership Plans</Button>
          </div>
          <dl className="flex flex-wrap gap-x-12 gap-y-4">
            {heroStats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="text-xs text-soft">{s.label}</dt>
                <dd className="text-[28px] font-bold leading-9">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
