import { useEffect, useRef, useState } from "react"

// Returns [ref, isVisible]. Becomes true once the element enters the viewport.
export default function useInView(options = { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, options)
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}
