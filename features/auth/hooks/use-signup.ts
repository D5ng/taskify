import { useRouter } from "next/router"
import { isAxiosError } from "axios"
import { ErrorResponse, SetError } from "@common/types"
import { AuthApiInstance } from "@common/services"
import { SignupValues } from "@features/auth/types"

export default function useSignup(setError: SetError<SignupValues>) {
  const router = useRouter()
  const onSubmit = async (values: SignupValues) => {
    try {
      await AuthApiInstance.signup({
        email: values.email,
        nickname: values.nickname,
        password: values.password,
      })

      router.push("/signin")
    } catch (error) {
      if (isAxiosError<ErrorResponse>(error) && error.response) {
        setError({ email: error.response.data.message })
      }
    }
  }

  return onSubmit
}
