import Container from "../components/common/Container"
import Button from "../components/common/Button"

export default function NotFound({ message = "The page you are looking for does not exist or has moved." }) {
  return (
    <section className="py-24 lg:py-32">
      <Container className="flex flex-col items-start gap-6">
        <p className="text-[13px] font-extrabold uppercase tracking-[2px] text-accent">Error 404</p>
        <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight lg:text-[80px] lg:leading-[84px]">Page not found.</h1>
        <p className="max-w-[540px] text-lg leading-[30px] text-soft">{message}</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button to="/">Back to Home</Button>
          <Button to="/programs" variant="secondary">Browse Programs</Button>
        </div>
      </Container>
    </section>
  )
}
