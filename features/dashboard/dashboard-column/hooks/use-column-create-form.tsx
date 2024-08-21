import { isAxiosError } from "axios"
import type { ErrorResponse, SetError } from "@common/types"
import type { UpdateDashboardColumn } from "@shared/dashboard/types"
import { useCreateDashboardColumn } from "@shared/dashboard/hooks"
import { useRouterQuery } from "@/shared/@common/hooks"

interface Props {
  onCloseModal: () => void
  setError: SetError<UpdateDashboardColumn>
}

export default function useColumnCreateForm(props: Props) {
  const dashboardId = +useRouterQuery("id")
  const createColumnMutation = useCreateDashboardColumn()

  const onSubmit = async (values: UpdateDashboardColumn) => {
    try {
      await createColumnMutation.trigger({ title: values.title, dashboardId })
      props.onCloseModal()
    } catch (error) {
      if (isAxiosError<ErrorResponse>(error) && error.response) {
        props.setError({ title: error.response.data.message })
      }
    }
  }

  return onSubmit
}
