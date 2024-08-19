import { isAxiosError } from "axios"
import { useRouterQuery } from "@common/hooks"
import { ErrorResponse, SetError } from "@common/types"
import { dateFormat, defaultDateTime } from "@common/utils"
import { TaskCardDefaultValues } from "@shared/dashboard/types"
import { useCreateTaskCard } from "@shared/dashboard/hooks"

interface Props {
  columnId: number
  onCloseModal: () => void
  setError: SetError<TaskCardDefaultValues>
}

export default function useCreateTaskCardForm(props: Props) {
  const dashboardId = +useRouterQuery("id")
  const TaskCardMutation = useCreateTaskCard(props.columnId)

  const onSubmit = async (values: TaskCardDefaultValues) => {
    const defaultData = {
      columnId: props.columnId,
      dashboardId,
      assigneeUserId: values.assignee.userId,
      title: values.title,
      description: values.description,
      dueDate: dateFormat(values.dueDate || defaultDateTime, "dashWithTime"),
      tags: values.tags,
    }
    try {
      const data = values.imageUrl ? { ...defaultData, imageUrl: values.imageUrl } : defaultData
      await TaskCardMutation.trigger(data)
      props.onCloseModal()
    } catch (error) {
      if (isAxiosError<ErrorResponse>(error) && error.response) {
        props.setError({ error: error.response.data.message })
      }
    }
  }

  return onSubmit
}
