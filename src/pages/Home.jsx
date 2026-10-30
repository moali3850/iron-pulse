import Hero from "../components/home/Hero"
import IntroSection from "../components/home/IntroSection"
import ProgramsSection from "../components/home/ProgramsSection"
import BenefitsSection from "../components/home/BenefitsSection"
import TrainersSection from "../components/home/TrainersSection"
import MembershipSection from "../components/home/MembershipSection"
import TestimonialsSection from "../components/home/TestimonialsSection"
import CtaBanner from "../components/common/CtaBanner"

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ProgramsSection />
      <BenefitsSection />
      <TrainersSection />
      <MembershipSection />
      <TestimonialsSection />
      <CtaBanner title="Your first week is on us." text="Book a free trial, meet a coach and tour the club — no commitment." label="Start Free Trial" to="/contact?subject=Free%20trial" />
    </>
  )
}
