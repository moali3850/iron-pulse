import FaqItem from "./FaqItem"

export default function FaqList({ items }) {
  return (
    <div className="mx-auto flex w-full max-w-[760px] flex-col gap-4">
      {items.map((item) => (
        <FaqItem key={item.q} question={item.q} answer={item.a} />
      ))}
    </div>
  )
}
