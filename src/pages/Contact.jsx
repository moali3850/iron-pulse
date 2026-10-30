import { useSearchParams } from "react-router-dom"
import PageHero from "../components/common/PageHero"
import Container from "../components/common/Container"
import ContactForm from "../components/contact/ContactForm"
import ContactInfo from "../components/contact/ContactInfo"

export default function Contact() {
  const [params] = useSearchParams()
  const subject = params.get("subject") || ""
  return (
    <>
      <PageHero eyebrow="Contact" title="Let’s talk." text="Questions about memberships, programs or a free trial? Send us a message and we will reply within one business day." />
      <section className="pb-16 pt-6 lg:pb-24">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
            {/* key resets the form when the pre-filled subject changes */}
            <ContactForm key={subject} initialSubject={subject} />
            <ContactInfo />
          </div>
        </Container>
      </section>
    </>
  )
}
