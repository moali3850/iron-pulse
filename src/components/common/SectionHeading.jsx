export default function SectionHeading({ eyebrow, title, text, align = "left", className = "" }) {
  const center = align === "center"
  return (
    <div className={`flex flex-col gap-4 ${center ? "items-center text-center" : "items-start text-left"} ${className}`}>
      {eyebrow && (
        <p className="text-[13px] font-extrabold uppercase tracking-[2px] text-accent">{eyebrow}</p>
      )}
      <h2 className="max-w-[820px] text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[40px] lg:leading-[48px]">
        {title}
      </h2>
      {text && <p className="max-w-[640px] text-lg leading-[30px] text-soft">{text}</p>}
    </div>
  )
}
