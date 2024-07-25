import { useRouter } from "next/router"

export default function useGoBack() {
  const router = useRouter()
  const handleGoBack = () => router.back()

  return handleGoBack
}
