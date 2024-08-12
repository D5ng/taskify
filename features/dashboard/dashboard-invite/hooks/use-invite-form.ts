import { FormEventHandler, useEffect, useState } from "react"
import { useInvite, useInvitePageStore } from "@/shared/dashboard/hooks"

interface UseInviteFormProps {
  value: string
  onCloseModal: () => void
}

export default function useInviteForm({ value, onCloseModal }: UseInviteFormProps) {
  const currentPage = useInvitePageStore.use.currentPage()
  const inviteMutation = useInvite(currentPage)

  const onSubmit: FormEventHandler = async (event) => {
    event.preventDefault()
    try {
      await inviteMutation.trigger({ email: value })
      onCloseModal()
    } catch (error) {
      setFormError(error)
    }
  }

  useEffect(() => {
    const resetFormError = () => {
      if () {
        setFormError("")
      }
    }

    resetFormError()
  }, [value])

  return {
    onSubmit,
    formError,
    isLoading: inviteMutation.isMutating,
  }
}
