import { useRouter } from "next/router"
import { setCookie } from "cookies-next"
import { useAuthStore } from "@common/hooks/store"
import { AuthApiInstance } from "@common/services"
import { useState } from "react"

export default function useGuestSignin() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const setAuthState = useAuthStore.use.updateAuthState()

  const onSubmit = async () => {
    setIsSubmitting(true)
    try {
      const result = await AuthApiInstance.guestSignin()
      setCookie("token", result)
      setAuthState(result)
      router.push("/dashboard/my")
    } catch (error) {
      return
    } finally {
      setIsSubmitting(false)
    }
  }

  return { onSubmit, isSubmitting }
}
