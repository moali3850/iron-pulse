import Container from "./Container"
import Photo from "./Photo"

// Page title block. With an `image` it shows a photo on the right (About page).
export default function PageHero({ eyebrow, title, text, image, imageAlt = "" }) {
  return (
    <section className="relative overflow-hidden border-b border-line/0">
      {image && (
        <div className="absolute inset-y-0 right-0 hidden w-[54%] lg:block" aria-hidden={!imageAlt}>
          <Photo src={image} alt={imageAlt} className="h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-ink/10" />
        </div>
      )}
      <Container className="relative">
        <div className="flex min-h-[300px] flex-col justify-center gap-5 py-14 lg:min-h-[340px] lg:py-16">
          <p className="text-[13px] font-extrabold uppercase tracking-[2px] text-accent">{eyebrow}</p>
          <h1 className={`text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[56px] lg:leading-[62px] ${image ? "max-w-[640px]" : "max-w-[900px]"}`}>{title}</h1>
          <p className={`text-lg leading-[30px] text-soft ${image ? "max-w-[520px]" : "max-w-[640px]"}`}>{text}</p>
        </div>
      </Container>
    </section>
  )
}
