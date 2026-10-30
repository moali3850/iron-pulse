import Photo from "../common/Photo"
import Button from "../common/Button"

export default function TrainerCard({ trainer, onView }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-panel transition-all duration-300 hover:border-accent hover:bg-raised hover:shadow-glow">
      <Photo src={trainer.image} alt={`Portrait of ${trainer.name}, ${trainer.specialty} coach`} className="h-[320px] w-full" imgClassName="object-top transition-transform duration-500 group-hover:scale-105" />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-xl font-bold leading-7">{trainer.name}</h3>
        <p className="text-xs font-extrabold uppercase tracking-[1px] text-accent">{trainer.specialty}</p>
        <p className="text-sm leading-[22px] text-soft">{trainer.bio}</p>
        <Button variant="secondary" full className="mt-auto" onClick={() => onView(trainer)}>
          View Profile<span className="sr-only"> of {trainer.name}</span>
        </Button>
      </div>
    </article>
  )
}
