import { FormEventHandler, useState } from "react"
import { AxiosError } from "axios"
import { AuthApiInstance } from "@common/services"
import type { InputStates } from "@common/components/ui/form-control"

interface UesUpdatePassword {
  currentPasswordState: InputStates
  newPasswordState: InputStates
  newPasswordConfirmState: InputStates
}

export default function useUpdatePassword({
  currentPasswordState,
  newPasswordState,
  newPasswordConfirmState,
}: UesUpdatePassword) {
  const [hasFormError, setHasFormError] = useState<any>("")
  const [isLoading, setIsLoading] = useState(false)

  const isFormValid = currentPasswordState.isValid && newPasswordState.isValid && newPasswordConfirmState.isValid

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    if (!isFormValid) return
    setIsLoading(true)

    const data = {
      password: currentPasswordState.inputValue,
      newPassword: newPasswordState.inputValue,
    }

    try {
      await AuthApiInstance.updatePassword(data)
      currentPasswordState.handleInputReset!()
      newPasswordState.handleInputReset!()
      newPasswordConfirmState.handleInputReset!()
      setIsLoading(false)
    } catch (err) {
      const error = err as AxiosError<{ message: string }>
      setHasFormError(error.response?.data.message || "알 수 없는 에러가 발생했어요.")
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    hasFormError,
    isFormValid,
    handleSubmit,
  }
}
