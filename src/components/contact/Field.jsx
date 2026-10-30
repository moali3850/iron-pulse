// Labelled input / textarea with default, focus, error and success states.
export default function Field({ id, label, name, value, onChange, onBlur, error, valid, helper, placeholder, type = "text", multiline = false, autoComplete }) {
  const describedBy = `${id}-help`
  const border = error
    ? "border-danger border-2 focus:shadow-[0_0_0_4px_rgba(255,92,92,0.25)]"
    : valid
      ? "border-success"
      : "border-line hover:border-muted focus:border-accent focus:shadow-[0_0_0_4px_rgba(255,90,31,0.35)]"
  const common = {
    id, name, value, onChange, onBlur, placeholder, autoComplete,
    "aria-invalid": error ? "true" : "false",
    "aria-describedby": describedBy,
    className: `w-full rounded-xl border-[1.5px] bg-panel px-4 py-4 text-base text-white placeholder:text-muted outline-none transition-all ${border}`,
  }
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[13px] font-semibold text-soft">{label}</label>
      {multiline ? <textarea rows={6} {...common} className={`${common.className} min-h-[150px] resize-y`} /> : <input type={type} {...common} />}
      <p id={describedBy} className={`text-xs ${error ? "text-danger" : valid ? "text-success" : "text-muted"}`}>
        {error || (valid ? "Looks good!" : helper)}
      </p>
    </div>
  )
}
