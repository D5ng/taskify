import { useDeleteDashboardColumn } from "@shared/dashboard/hooks"
import { FormEventHandler } from "react"

interface Props {
  id: number
  onCloseModal: () => void
}

export default function useDashboardColumnDeleteForm(props: Props) {
  const deleteColumnMutation = useDeleteDashboardColumn(props.id)

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    await deleteColumnMutation.trigger()
    props.onCloseModal()
  }

  return {
    onSubmit,
    isLoading: deleteColumnMutation.isMutating,
  }
}
