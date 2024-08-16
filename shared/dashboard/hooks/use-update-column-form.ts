import { UpdateDashboardColumn } from "../types"
import { useUpdateDashboardColumn } from "./mutation"
import { isAxiosError } from "axios"
import { ErrorResponse, SetError } from "@/shared/@common/types"

interface Props {
  columnId: number
  onCloseModal: () => void
  setError: SetError<UpdateDashboardColumn>
}

export default function useUpdateColumnForm(props: Props) {
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
