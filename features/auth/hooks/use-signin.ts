import { useRouter } from "next/router"
import { setCookie } from "cookies-next"
import { AuthApiInstance } from "@common/services"
import { useAuthStore } from "@common/hooks/store"
import { SigninValues } from "../types"
import { isAxiosError } from "axios"
import { ErrorResponse, SetError } from "@/shared/@common/types"

export default function useSignin(setError: SetError<SigninValues>) {
  const router = useRouter()
  const setAuthState = useAuthStore.use.updateAuthState()

  const onSubmit = async (values: SigninValues) => {
    try {
      const result = await AuthApiInstance.signin(values)
      setCookie("token", result)
      setAuthState(result)
      router.push("/dashboard/my")
    } catch (error) {
      if (isAxiosError<ErrorResponse>(error) && error.response) {
        if (error.response.data.message.includes("비밀번호")) {
          setError({ password: error.response.data.message })
          return
        }

        if (error.response.status === 404) {
          setError({ form: error.response.data.message })
          return
        }
      }
    }
  }

  return onSubmit
}
