import { ChangeEventHandler, useState } from "react"

type InputValidation = (value: string) => boolean

interface Props {
  isErrorMessage?: boolean
  defaultValue?: string
  inputValidation: (value: string) => boolean
  handleResetError: () => void
  handleChangeError?: (errorMessage: string) => void
}

export default function useInput(
  inputValidation: InputValidation,
  handleChangeError?: (errorMessage: string) => void,
  defaultValue?: string
) {
  // export default function useInput({ inputValidation, defaultValue = "", errorMessage, handleResetError }: Props) {
  const [inputValue, setInputValue] = useState(defaultValue || "")
  const [isTouched, setIsTouched] = useState(false)

  const handleInputValueChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    setInputValue(event.target.value)
  }

  const handleInputBlur: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = () => {
    setIsTouched(true)

    if (!handleChangeError) return
    !isValid ? handleChangeError("이메일 형식이 올바르지 않습니다.") : handleChangeError("")
  }

  const handleInputReset = () => {
    setInputValue("")
    setIsTouched(false)
  }

  const isValid = inputValidation(inputValue)
  const hasError = !isValid && isTouched

  return {
    isValid,
    hasError,
    inputValue,
    handleInputValueChange,
    handleInputBlur,
    handleInputReset,
  }
}

// // 폼을 눌렀을 때 Error
// // Input 유효성 실패했을 때의 Error

// const inputError = hasError && ""
// const error =
