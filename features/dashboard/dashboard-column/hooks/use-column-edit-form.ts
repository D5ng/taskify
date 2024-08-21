import { isAxiosError } from "axios"
import type { ErrorResponse, SetError } from "@common/types"
import type { UpdateDashboardColumn } from "@shared/dashboard/types"
import { useUpdateDashboardColumn } from "@shared/dashboard/hooks"

interface Props {
  columnId: number
  onCloseModal: () => void
  setError: SetError<UpdateDashboardColumn>
}

export default function useColumnEditForm(props: Props) {
  const updateColumnMutation = useUpdateDashboardColumn(props.columnId)

  const onSubmit = async (values: UpdateDashboardColumn) => {
    try {
      await updateColumnMutation.trigger({ title: values.title })
      props.onCloseModal()
    } catch (error) {
      if (isAxiosError<ErrorResponse>(error) && error.response) {
        props.setError({ title: error.response.data.message })
      }
    }
  }

  return onSubmit
}
