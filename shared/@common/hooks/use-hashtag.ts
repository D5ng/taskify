import { getRandomColor } from "@features/dashboard/dashboard-task-card/utils"
import { ChangeEventHandler, KeyboardEventHandler, useState } from "react"
import { HASHTAG_ALLOWED_COMMEND, HASHTAG_INPUT_LENGTH, HASHTAG_MAX_ARRAY_LENGTH } from "../constants"

interface Props {
  value: string[]
  defaultHashtags?: string[]
  onChangeValue: (value: string[]) => void
}

export default function useHashtag({ onChangeValue, value }: Props) {
  const [inputValue, setInputValue] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    const target = event.target as HTMLInputElement

    if (target.value.length > HASHTAG_INPUT_LENGTH) {
      setErrorMessage("10글자 미만으로 입력해주세요.")
      return
    }

    setInputValue(target.value)
    setErrorMessage("")
  }

  const onKeyUp: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (!HASHTAG_ALLOWED_COMMEND.includes(event.code)) return
    const target = event.target as HTMLInputElement

    if (!target.value.trim().length) return
    if (errorMessage) return

    if (value.includes(target.value)) {
      setErrorMessage("중복된 해시태그는 사용할 수 없어요.")
      return
    }

    const { color, background } = getRandomColor()

    const newTag = target.value.trim() + `$${color}$${background}`

    const values = [...value, newTag]

    setErrorMessage("")
    onChangeValue(values)
    setInputValue("")
  }

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.code === "Enter") {
      event.preventDefault()
      return
    }
  }

  const handleDeleteHashtag = (deleteHashtag: string) => {
    const filteredHashtag = value.filter((hashtag) => hashtag !== deleteHashtag)
    if (filteredHashtag.length < HASHTAG_MAX_ARRAY_LENGTH) setErrorMessage("")
    onChangeValue(filteredHashtag)
  }

  const hasError = !!errorMessage

  return {
    value: inputValue,
    onChange,
    onKeyDown,
    onKeyUp,
    handleDeleteHashtag,
    errorMessage,
    hasError,
  }
}
