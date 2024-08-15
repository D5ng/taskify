import { useRouter } from "next/router"
import { isAxiosError } from "axios"
import { SignupResponseError } from "@common/types"
import { AuthApiInstance } from "@common/services"
import { SignupDefaultValues } from "@features/auth/types"

type SetError = (error: Partial<SignupDefaultValues>) => void

export default function useSignup(setError: SetError) {
  const router = useRouter()
  const onSubmit = async (values: SignupDefaultValues) => {
    try {
      await AuthApiInstance.signup({
        email: values.email,
        nickname: values.nickname,
        password: values.password,
      })

      router.push("/dashboard/my")
    } catch (error) {
      if (isAxiosError<SignupResponseError>(error) && error.response) {
        setError({ email: error.response.data.message })
      }
    }
  }

  return onSubmit
}
