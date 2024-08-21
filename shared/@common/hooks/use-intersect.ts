import { useCallback, useEffect, useRef } from "react"

type Intersect = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void

export default function useIntersect<T extends HTMLElement>(onIntersect: Intersect) {
  const ref = useRef<T>(null)

  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) onIntersect(entry, observer)
      })
    },
    [onIntersect]
  )

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(callback)
    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [callback])

  return ref
}
