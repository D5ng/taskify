import { FormEventHandler, useState } from "react"
import { AxiosError } from "axios"

import { useRouter } from "next/router"
import useAuthStore from "@/store/auth-store"
import { setCookie } from "cookies-next"
import { AuthApiInstance } from "@/shared/common/services"
import { InputStates } from "@/shared/common/components/ui/form-control-compound/form-control.type"

interface SignInProps {
  emailState: InputStates
  passwordState: InputStates
}

export default function useSignin({ emailState, passwordState }: SignInProps) {
  const router = useRouter()
  const [hasFormError, setHasFormError] = useState<any>("")
  const [isLoading, setIsLoading] = useState(false)
  const setAuthState = useAuthStore.use.updateAuthState()

  const isFormValid = emailState.isValid && passwordState.isValid

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    if (!isFormValid) return
    setIsLoading(true)

    const data = {
      email: emailState.inputValue,
      password: passwordState.inputValue,
    }

    try {
      const result = await AuthApiInstance.signin(data)
      setCookie("token", result)
      setAuthState(result)
      setIsLoading(false)
      router.replace("/dashboard/my")
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
