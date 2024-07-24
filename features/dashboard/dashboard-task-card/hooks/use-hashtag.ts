import { getRandomColor } from "@features/dashboard/dashboard-task-card/utils"
import { ChangeEventHandler, KeyboardEventHandler, useState } from "react"

export default function useHashtag(defaultHashtags?: string[]) {
  const [inputValue, setInputValue] = useState("")
  const [hashtags, setHashtags] = useState<string[]>(defaultHashtags || [])

  const handleInputValueChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) =>
    setInputValue(event.target.value)

  const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = (event) => {
    const allowedCommand = ["Comma", "Enter", "Space", "NumpadEnter"]
    if (!allowedCommand.includes(event.code)) return
    const target = event.target as HTMLInputElement

    if (!target.value.trim().length) return

    const { color, background } = getRandomColor()
    const newTag = target.value.trim() + `$${color}$${background}`

    setHashtags((prevState) => [...prevState, newTag])
    setInputValue("")
  }

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.code === "Enter") {
      event.preventDefault()
      return
    }
  }

  return {
    inputValue,
    hashtags,
    handleInputValueChange,
    handleKeyDown,
    handleKeyUp,
    hasError: false,
    isValid: true,
  }
}
