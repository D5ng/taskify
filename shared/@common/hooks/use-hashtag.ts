import { getRandomColor } from "@features/dashboard/dashboard-task-card/utils"
import { ChangeEventHandler, KeyboardEventHandler, useState } from "react"
import { HASHTAG_ALLOWED_COMMEND, HASHTAG_INPUT_LENGTH, HASHTAG_MAX_ARRAY_LENGTH } from "../constants"

export default function useHashtag(defaultHashtags?: string[]) {
  const [inputValue, setInputValue] = useState("")
  const [hashtags, setHashtags] = useState<string[]>(defaultHashtags || [])
  const [errorMessage, setErrorMessage] = useState("")

  const handleInputValueChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    const target = event.target as HTMLInputElement

    if (target.value.length > HASHTAG_INPUT_LENGTH) {
      setErrorMessage("10글자 미만으로 입력해주세요.")
      return
    }

    setInputValue(target.value)
    setErrorMessage("")
  }

  const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (!HASHTAG_ALLOWED_COMMEND.includes(event.code)) return
    const target = event.target as HTMLInputElement

    if (!target.value.trim().length) return

    if (hashtags.includes(target.value)) {
      setErrorMessage("중복된 해시태그는 사용할 수 없어요.")
      return
    }

    const { color, background } = getRandomColor()

    const newTag = target.value.trim() + `$${color}$${background}`

    setErrorMessage("")
    setHashtags((prevState) => [...prevState, newTag])
    setInputValue("")
  }

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.code === "Enter") {
      event.preventDefault()
      return
    }
  }

  const handleDeleteHashtag = (deleteHashtag: string) => {
    const filteredHashtag = hashtags.filter((hashtag) => hashtag !== deleteHashtag)
    if (filteredHashtag.length < HASHTAG_MAX_ARRAY_LENGTH) setErrorMessage("")
    setHashtags(filteredHashtag)
  }

  const hasError = !!errorMessage

  return {
    inputValue,
    hashtags,
    handleInputValueChange,
    handleKeyDown,
    handleKeyUp,
    handleDeleteHashtag,
    errorMessage,
    hasError,
    isValid: true,
  }
}
