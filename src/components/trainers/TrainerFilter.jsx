import Chip from "../common/Chip"
import { trainerCategories } from "../../data/trainers"

export default function TrainerFilter({ category, onCategory, count }) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <div role="group" aria-label="Filter by specialty" className="flex flex-wrap gap-3">
        {trainerCategories.map((c) => (
          <Chip key={c} selected={category === c} onClick={() => onCategory(c)}>{c}</Chip>
        ))}
      </div>
      <p className="text-sm text-muted" aria-live="polite">Showing {count} {count === 1 ? "trainer" : "trainers"}</p>
    </div>
  )
}
