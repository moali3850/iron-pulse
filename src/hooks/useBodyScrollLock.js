import { useEffect } from "react"

// Prevents the page behind a modal / mobile menu from scrolling.
export default function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = previous }
  }, [locked])
}
