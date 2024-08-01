import { FormEventHandler } from "react"
import { useDashboardPageStore, useUpdateDashboard } from "@/shared/dashboard/hooks"
import { ColorChipColor } from "@/shared/@common/types"
import { useRouterQuery } from "@/shared/@common/hooks"
import useDashboardStore from "@/shared/dashboard/hooks/store/dashboard.store"

interface Props {
  title: string
  color: ColorChipColor
  onReset?: () => void
}

export default function useEditDashboardForm({ title, color }: Props) {
  const dashboardId = +useRouterQuery("id")
  const currentPage = useDashboardPageStore.use.currentPage()
  const updateDashboardMutation = useUpdateDashboard(dashboardId, currentPage)
  const setDashboard = useDashboardStore.use.setDashboard()

  const onSubmit: FormEventHandler = async (event) => {
    event.preventDefault()
    await updateDashboardMutation.trigger({ title, color })
    setDashboard({ title, color })
  }

  return {
    onSubmit,
    isLoading: updateDashboardMutation.isMutating,
  }
}
