import { Check, Minus } from "lucide-react"

// Responsive table card. `columns` = [{ label, highlight }], `rows` = arrays of cells.
// A cell can be a string, true (check) or false (dash). `renderCell` can override a cell.
export default function DataTable({ columns, rows, renderCell, caption }) {
  return (
    <div className="overflow-x-auto rounded-[20px] border border-line bg-panel">
      <table className="w-full min-w-[640px] border-collapse text-left">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="bg-raised">
            {columns.map((col) => (
              <th key={col.label} scope="col" className={`px-6 py-4 text-[13px] font-extrabold uppercase tracking-[2px] sm:px-8 ${col.highlight ? "text-accent" : "text-soft"}`}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} className="border-t border-line">
              {row.map((cell, c) => (
                <td key={c} className={`px-6 py-5 text-sm sm:px-8 ${c === 0 ? "font-bold text-white" : "text-soft"}`}>
                  {renderCell?.(cell, c, r) ?? (
                    cell === true ? <Check size={18} strokeWidth={2.6} className="text-accent" aria-label="Included" /> :
                    cell === false ? <Minus size={18} className="text-muted" aria-label="Not included" /> : cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
