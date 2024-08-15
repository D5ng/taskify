import { isAxiosError } from "axios"
import { SetError, ErrorResponse } from "@common/types"
import { useInvite, useInvitePageStore } from "@/shared/dashboard/hooks"
import { DefaultValues } from "@features/dashboard/dashboard-invite/types"

export default function useInviteForm(onCloseModal: () => void, setError: SetError<DefaultValues>) {
  const currentPage = useInvitePageStore.use.currentPage()
  const inviteMutation = useInvite(currentPage)

  const onSubmit = async (values: DefaultValues) => {
    try {
      await inviteMutation.trigger({ email: values.email })
      onCloseModal()
    } catch (error) {
      if (isAxiosError<ErrorResponse>(error) && error.response) {
        setError({ email: error.response.data.message })
      }
    }
  }

  return onSubmit
}
