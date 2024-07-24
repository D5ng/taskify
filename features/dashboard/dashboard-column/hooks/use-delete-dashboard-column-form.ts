import { FormEvent } from "react"
import { useDeleteDashboardColumn } from "@shared/dashboard/hooks"
import { DashboardColumn } from "@shared/dashboard/types"

interface Props extends Pick<DashboardColumn, "id"> {
  onCloseModal: () => void
}

export default function useDeleteDashboardColumnForm({ id, onCloseModal }: Props) {
  const deleteColumnMutation = useDeleteDashboardColumn(id)
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await deleteColumnMutation.trigger()
    onCloseModal()
  }

  return {
    onSubmit,
    isLoading: deleteColumnMutation.isMutating,
  }
}
