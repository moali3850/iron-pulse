export default function Chip({ selected, onClick, children }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`rounded-full border-[1.5px] px-5 py-2.5 text-sm font-bold transition-colors ${
        selected
          ? "border-accent bg-accent text-ink"
          : "border-line text-soft hover:border-soft hover:bg-raised hover:text-white"
      }`}
    >
      {children}
    </button>
  )
}
