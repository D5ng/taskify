import { FormEventHandler } from "react"
import { useUpdateDashboard } from "@/shared/dashboard/hooks"
import { ColorChipColor } from "@/shared/@common/types"

interface Props {
  currentPage: number
  title: string
  color: ColorChipColor
  onCloseModal?: () => void
  onReset?: () => void
}

export default function useEditDashboardForm({ currentPage, title, color, onCloseModal, onReset }: Props) {
  const updateDashboardMutation = useUpdateDashboard(currentPage)

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault()
    updateDashboardMutation.trigger({ title, color })
    onCloseModal && onCloseModal()
    onReset && onReset()
  }

  return {
    onSubmit,
    isLoading: updateDashboardMutation.isMutating,
  }
}
