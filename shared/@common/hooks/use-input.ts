import { ChangeEventHandler, useState } from "react"

type InputValidation = (value: string) => boolean

export default function useInput(inputValidation: InputValidation, defaultValue?: string) {
  const [inputValue, setInputValue] = useState(defaultValue || "")
  const [isTouched, setIsTouched] = useState(false)

  const handleInputValueChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) =>
    setInputValue(event.target.value)
  const handleInputBlur: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = () => setIsTouched(true)
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
