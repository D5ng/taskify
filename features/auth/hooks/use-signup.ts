import { FormEventHandler, useState } from "react"
import { AxiosError } from "axios"
import { AuthApiInstance } from "@common/services"
import { InputStates } from "@common/components/ui/form-control-compound/form-control.type"

interface SignUpProps {
  emailState: InputStates
  nicknameState: InputStates
  passwordState: InputStates
  passwordConfirmState: InputStates
}

export default function useSignup({ emailState, nicknameState, passwordState, passwordConfirmState }: SignUpProps) {
  const [hasFormError, setHasFormError] = useState<any>("")
  const [isLoading, setIsLoading] = useState(false)

  const isFormValid =
    emailState.isValid && nicknameState.isValid && passwordState.isValid && passwordConfirmState.isValid

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    if (!isFormValid) return
    setIsLoading(true)

    const data = {
      email: emailState.inputValue,
      nickname: nicknameState.inputValue,
      password: passwordState.inputValue,
    }

    try {
      await AuthApiInstance.signup(data)
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
