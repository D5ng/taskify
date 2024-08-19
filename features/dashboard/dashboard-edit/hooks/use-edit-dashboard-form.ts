import { isAxiosError } from "axios"
import type { ErrorResponse, SetError } from "@common/types"
import { useRouterQuery } from "@common/hooks"
import { useDashboardPageStore, useUpdateDashboard } from "@shared/dashboard/hooks"
import type { DashboardData } from "@shared/dashboard/types"

export default function useEditDashboardForm(setError: SetError<DashboardData>) {
  const dashboardId = +useRouterQuery("id")
  const currentPage = useDashboardPageStore.use.currentPage()
  const updateDashboardMutation = useUpdateDashboard(dashboardId, currentPage)

  const onSubmit = async ({ title, color }: DashboardData) => {
    try {
      await updateDashboardMutation.trigger({ title, color })
    } catch (error) {
      if (isAxiosError<ErrorResponse>(error) && error.response) {
        setError({ title: error.response.data.message })
      }
    }
  }

  return onSubmit
}
