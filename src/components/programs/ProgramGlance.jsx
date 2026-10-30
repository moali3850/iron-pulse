import Button from "../common/Button"

// "Program at a glance" side card on the Program Details page
export default function ProgramGlance({ glance }) {
  return (
    <aside className="flex flex-col gap-5 rounded-[20px] border border-line bg-panel p-8 lg:sticky lg:top-28">
      <h2 className="text-xl font-bold leading-7">Program at a glance</h2>
      <dl className="flex flex-col gap-5">
        {Object.entries(glance).map(([k, v]) => (
          <div key={k} className="flex items-start justify-between gap-4 text-sm">
            <dt className="text-muted">{k}</dt>
            <dd className="text-right font-semibold">{v}</dd>
          </div>
        ))}
      </dl>
      <hr className="border-line" />
      <Button to="/membership" full>Join Program</Button>
      <p className="text-xs text-muted">Included with Pro and Elite memberships. Free 7-day trial available.</p>
    </aside>
  )
}
