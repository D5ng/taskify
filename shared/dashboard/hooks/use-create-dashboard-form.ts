import { FormEventHandler } from "react"
import { ColorChipColor } from "@shared/dashboard/types"
import { useCreateDashboard } from "./mutation/dashboard.mutation"

interface UseNewDashbaordFormProps {
  currentPage: number
  title: string
  color: ColorChipColor
  onCloseModal?: () => void
  onReset?: () => void
}

export default function useCreateDashboardForm({
  currentPage,
  title,
  color,
  onCloseModal,
  onReset,
}: UseNewDashbaordFormProps) {
  const createDashboardMutation = useCreateDashboard(currentPage)

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault()
    createDashboardMutation.trigger({ title, color })
    onCloseModal && onCloseModal()
    onReset && onReset()
  }

  return {
    onSubmit,
    isLoading: createDashboardMutation.isMutating,
  }
}
