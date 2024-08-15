import { ErrorResponse, SetError } from "@common/types"
import { useRouterQuery } from "@common/hooks"
import { useDashboardPageStore, useDashboardStore, useUpdateDashboard } from "@/shared/dashboard/hooks"
import { DefaultValues } from "@features/dashboard/dashboard-edit/types"
import { isAxiosError } from "axios"

export default function useEditDashboardForm(setError: SetError<DefaultValues>) {
  const dashboardId = +useRouterQuery("id")
  const currentPage = useDashboardPageStore.use.currentPage()
  const updateDashboardMutation = useUpdateDashboard(dashboardId, currentPage)
  const setDashboard = useDashboardStore.use.setDashboard()

  const onSubmit = async ({ title, color }: DefaultValues) => {
    try {
      await updateDashboardMutation.trigger({ title, color })
      setDashboard({ title, color })
    } catch (error) {
      if (isAxiosError<ErrorResponse>(error) && error.response) {
        setError({ title: error.response.data.message })
      }
    }
  }

  return onSubmit
}
