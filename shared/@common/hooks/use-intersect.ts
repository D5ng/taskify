import { useEffect, useRef } from "react"

type Intersect = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void

export default function useIntersect<T extends HTMLElement>(onIntersect: Intersect) {
  const ref = useRef<T>(null)

  const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        onIntersect(entry, observer)
      }
    })
  }

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(callback)
    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return ref
}
