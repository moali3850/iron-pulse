import Icon from "./Icon"

// Icon tile + title + text (used for Benefits and Values)
export default function FeatureCard({ icon, title, text }) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-[20px] border border-line bg-panel p-7">
      <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/15 text-accent">
        <Icon name={icon} />
      </span>
      <h3 className="text-xl font-bold leading-7">{title}</h3>
      <p className="text-sm leading-[22px] text-soft">{text}</p>
    </div>
  )
}
