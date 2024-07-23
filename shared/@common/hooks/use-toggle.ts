import { useState } from "react"

const useToggle = () => {
  const [isToggle, setIsToggle] = useState(false)
  const onOpenToggle = () => setIsToggle(true)
  const onCloseToggle = () => setIsToggle(false)
  const onToggle = () => setIsToggle((prev) => !prev)

  return {
    isToggle,
    onOpenToggle,
    onCloseToggle,
    onToggle,
  }
}

export default useToggle
