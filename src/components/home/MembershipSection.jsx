import Container from "../common/Container"
import Reveal from "../common/Reveal"
import SectionHeading from "../common/SectionHeading"
import MembershipCard from "../membership/MembershipCard"
import { memberships } from "../../data/memberships"

export default function MembershipSection() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeading align="center" eyebrow="Membership" title="Simple plans. No hidden fees." text="Choose the level of support that fits your goals. Upgrade, freeze or cancel anytime." className="mb-12" />
        <div className="grid items-start gap-8 lg:grid-cols-3 lg:gap-10">
          {memberships.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 100}><MembershipCard plan={plan} /></Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
