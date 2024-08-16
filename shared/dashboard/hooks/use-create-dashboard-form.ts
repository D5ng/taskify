import { isAxiosError } from "axios"
import { DashboardData } from "../types"
import { useCreateDashboard } from "./mutation"
import { useDashboardPageStore } from "./store"
import { ErrorResponse, SetError } from "@/shared/@common/types"

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
