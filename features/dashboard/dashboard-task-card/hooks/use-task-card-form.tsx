import { AxiosResponse, isAxiosError } from "axios"
import { useRouterQuery } from "@common/hooks"
import { ErrorResponse, SetError } from "@common/types"
import { dateFormat, defaultDateTime } from "@common/utils"
import { CreateTaskCard, TaskCardDefaultValues } from "@shared/dashboard/types"

interface Props {
  columnId: number
  onCloseModal: () => void
  setError: SetError<TaskCardDefaultValues>
  mutationFn: (data: CreateTaskCard) => Promise<AxiosResponse<any, any>> | Promise<void>
}

export default function useTaskCardForm(props: Props) {
  const dashboardId = +useRouterQuery("id")

  const onSubmit = async (values: TaskCardDefaultValues) => {
    const defaultData: CreateTaskCard = {
      columnId: props.columnId,
      dashboardId,
      assigneeUserId: values.assigneeUserId,
      title: values.title,
      description: values.description,
      dueDate: dateFormat(values.dueDate || defaultDateTime, "dashWithTime"),
      tags: values.tags,
    }
    try {
      const data = values.imageUrl ? { ...defaultData, imageUrl: values.imageUrl } : defaultData
      await props.mutationFn(data)
      props.onCloseModal()
    } catch (error) {
      if (isAxiosError<ErrorResponse>(error) && error.response) {
        props.setError({ error: error.response.data.message })
      }
    }
  }

  return onSubmit
}
