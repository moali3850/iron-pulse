import { useState } from "react"
import PageHero from "../components/common/PageHero"
import Container from "../components/common/Container"
import Reveal from "../components/common/Reveal"
import SectionHeading from "../components/common/SectionHeading"
import FaqList from "../components/common/FaqList"
import CtaBanner from "../components/common/CtaBanner"
import BillingToggle from "../components/membership/BillingToggle"
import MembershipCard from "../components/membership/MembershipCard"
import ComparisonTable from "../components/membership/ComparisonTable"
import { memberships, membershipFaqs } from "../data/memberships"

export default function Membership() {
  const [billing, setBilling] = useState("monthly")
  return (
    <>
      <PageHero eyebrow="Membership" title="Choose your plan." text="Transparent pricing, no joining fees and the freedom to upgrade, freeze or cancel anytime." />
      <section className="pb-16 pt-6 lg:pb-24">
        <Container className="flex flex-col items-center gap-12">
          <BillingToggle billing={billing} onChange={setBilling} />
          <div className="grid w-full items-start gap-8 lg:grid-cols-3 lg:gap-10">
            {memberships.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 100}><MembershipCard plan={plan} billing={billing} /></Reveal>
            ))}
          </div>
          <p className="text-xs text-muted">All plans include a 7-day free trial. Prices shown in USD per month{billing === "yearly" ? ", billed yearly" : ", billed monthly"}.</p>
        </Container>
      </section>
      <section className="bg-panel py-16 lg:py-20">
        <Container>
          <SectionHeading eyebrow="Compare plans" title="Every benefit, side by side." className="mb-10" />
          <ComparisonTable />
        </Container>
      </section>
      <section id="faq" className="scroll-mt-24 py-16 lg:py-20">
        <Container>
          <SectionHeading align="center" eyebrow="FAQ" title="Membership questions, answered." className="mb-10" />
          <FaqList items={membershipFaqs} />
        </Container>
      </section>
      <CtaBanner title="Still have questions?" text="Our team is happy to help you choose the right plan." label="Contact Us" to="/contact" />
    </>
  )
}
