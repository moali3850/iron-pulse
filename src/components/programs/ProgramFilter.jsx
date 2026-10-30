import { ChevronDown } from "lucide-react"
import Chip from "../common/Chip"
import { programCategories, programLevels } from "../../data/programs"

export default function ProgramFilter({ category, onCategory, level, onLevel, count }) {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-3">
        {programCategories.map((c) => (
          <Chip key={c} selected={category === c} onClick={() => onCategory(c)}>{c}</Chip>
        ))}
      </div>
      <div className="flex items-center gap-5">
        <p className="text-sm text-muted" aria-live="polite">Showing {count} {count === 1 ? "program" : "programs"}</p>
        <label className="relative">
          <span className="sr-only">Filter by level</span>
          <select
            value={level}
            onChange={(e) => onLevel(e.target.value)}
            className="cursor-pointer appearance-none rounded-xl border-[1.5px] border-line bg-panel py-3 pl-4 pr-11 text-sm font-semibold text-white transition-colors hover:border-muted"
          >
            {programLevels.map((l) => (
              <option key={l} value={l}>Level: {l}</option>
            ))}
          </select>
          <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-soft" aria-hidden="true" />
        </label>
      </div>
    </div>
  )
}
