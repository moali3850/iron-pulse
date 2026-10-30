import DataTable from "../common/DataTable"
import Photo from "../common/Photo"

export default function CompareTable({ trainers }) {
  const columns = [{ label: "Trainer" }, { label: "Specialty" }, { label: "Experience" }, { label: "Best for" }, { label: "Available" }]
  const rows = trainers.map((t) => [t, t.specialty, t.experience, t.bestFor, t.available])
  return (
    <DataTable
      caption="Compare trainers"
      columns={columns}
      rows={rows}
      renderCell={(cell, c) =>
        c === 0 ? (
          <span className="flex items-center gap-3.5">
            <Photo src={cell.image} alt="" className="h-11 w-11 shrink-0 rounded-full" imgClassName="object-top" />
            <span className="font-bold text-white">{cell.name}</span>
          </span>
        ) : undefined
      }
    />
  )
}
