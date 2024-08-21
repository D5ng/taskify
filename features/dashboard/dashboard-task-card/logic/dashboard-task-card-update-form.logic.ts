import type { TaskCard, TaskCardDefaultValues } from "@shared/dashboard/types"
import { taskCardValidation } from "@features/dashboard/dashboard-task-card/utils"

export type DefaultValues = (props: TaskCard) => TaskCardDefaultValues

export const defaultValues: DefaultValues = (props: TaskCard) => {
  return {
    error: "",
    columnId: props.columnId,
    assigneeUserId: props.assignee.id,
    title: props.title,
    description: props.description,
    dueDate: props.dueDate,
    tags: props.tags,
    imageUrl: props.imageUrl,
  }
}

export const validate = (values: TaskCardDefaultValues) => {
  const error: { [key in keyof TaskCardDefaultValues]?: string } = {}

  error.title = taskCardValidation.email(values.title)
  error.description = taskCardValidation.description(values.description)

  return error
}
