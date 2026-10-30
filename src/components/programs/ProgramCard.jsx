import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import Photo from "../common/Photo"
import Badge from "../common/Badge"

export default function ProgramCard({ program }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-panel transition-all duration-300 hover:border-accent hover:bg-raised hover:shadow-glow">
      <Link to={`/programs/${program.id}`} tabIndex={-1} aria-hidden="true" className="block">
        <Photo src={program.image} alt="" className="h-[230px] w-full" imgClassName="transition-transform duration-500 group-hover:scale-105" />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-3">
          <Badge>{program.level}</Badge>
          <span className="text-xs font-medium text-muted">{program.frequency}</span>
        </div>
        <h3 className="text-[28px] font-bold leading-9">{program.title}</h3>
        <p className="text-sm leading-[22px] text-soft">{program.summary}</p>
        <Link
          to={`/programs/${program.id}`}
          className="mt-auto inline-flex items-center gap-2 pt-2 text-base font-bold text-accent transition-colors hover:text-accent-hover"
        >
          View Details <span className="sr-only">for {program.title}</span>
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
