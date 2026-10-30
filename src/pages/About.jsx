import PageHero from "../components/common/PageHero"
import CtaBanner from "../components/common/CtaBanner"
import StorySection from "../components/about/StorySection"
import FacilitiesSection from "../components/about/FacilitiesSection"
import StatsSection from "../components/about/StatsSection"
import ValuesSection from "../components/about/ValuesSection"
import { images } from "../data/images"

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About IRON PULSE"
        title="Built by lifters. Driven by community."
        text="Since 2016 we have helped thousands of people get stronger, move better and show up for themselves — one session at a time."
        image={images.gym}
        imageAlt="IRON PULSE gym floor"
      />
      <StorySection />
      <FacilitiesSection />
      <StatsSection />
      <ValuesSection />
      <CtaBanner title="Ready to train with us?" text="Join IRON PULSE today and meet the team that will help you get there." label="Become a Member" to="/membership" />
    </>
  )
}
