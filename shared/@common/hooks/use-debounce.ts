import { useEffect, useState } from "react"

export default function useDebounce(value: string, delay: number) {
  const [debounceValue, setDebounceValue] = useState("")

  useEffect(() => {
    const timerId = setTimeout(() => setDebounceValue(value), delay)
    return () => clearTimeout(timerId)
  }, [value, delay])

  return debounceValue
}
