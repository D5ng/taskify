import { useState } from "react"

export default function useComposing() {
  const [isComposing, setIsComposing] = useState(false)
  const handleCompositionStart = () => setIsComposing(true)
  const handleCompositionEnd = () => setIsComposing(false)

  return {
    isComposing,
    handleCompositionStart,
    handleCompositionEnd,
  }
}
