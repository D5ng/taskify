import { FormEventHandler } from "react"
import { useInvite, useInvitePageStore } from "@/shared/dashboard/hooks"

interface UseInviteFormProps {
  value: string
  onCloseModal: () => void
}

export default function useInviteForm({ value, onCloseModal }: UseInviteFormProps) {
  const currentPage = useInvitePageStore.use.currentPage()
  const invite = useInvite(currentPage)

  const onSubmit: FormEventHandler = async (event) => {
    event.preventDefault()
    await invite.trigger({ email: value })
    onCloseModal()
  }

  return {
    onSubmit,
    isLoading: invite.isMutating,
  }
}
