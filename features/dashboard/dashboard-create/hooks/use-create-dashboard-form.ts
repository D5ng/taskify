import { isAxiosError } from "axios"
import type { ErrorResponse, SetError } from "@common/types"
import type { DashboardData } from "@shared/dashboard/types"
import { useCreateDashboard, useDashboardPageStore } from "@shared/dashboard/hooks"

interface Props {
  onCloseModal: () => void
  setError: SetError<DashboardData>
}

export default function useCreateDashboardForm(props: Props) {
  const currentPage = useDashboardPageStore.use.currentPage()
  const createDashboardMutation = useCreateDashboard(currentPage)

  const onSubmit = async (values: DashboardData) => {
    try {
      await createDashboardMutation.trigger({ title: values.title, color: values.color })
      props.onCloseModal()
    } catch (error) {
      if (isAxiosError<ErrorResponse>(error) && error.response) {
        props.setError({ title: error.response.data.message })
      }
    }
  }

  return onSubmit
}
