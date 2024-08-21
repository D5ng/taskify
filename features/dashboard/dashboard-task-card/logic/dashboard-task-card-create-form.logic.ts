import type { TaskCardDefaultValues } from "@shared/dashboard/types"
import { taskCardValidation } from "@features/dashboard/dashboard-task-card/utils"

export type DefaultValues = (assigneeUserId: number, columnId: number) => TaskCardDefaultValues

export const defaultValues: DefaultValues = (assigneeUserId: number, columnId: number) => {
  const date = new Date()
  const offset = date.getTimezoneOffset() * 60000
  const dateOffset = new Date(date.getTime() - offset)

  return {
    error: "",
    columnId,
    assigneeUserId,
    title: "",
    description: "",
    dueDate: dateOffset.toISOString().slice(0, 16),
    tags: [],
    imageUrl: null,
  }
}

export const validate = (values: TaskCardDefaultValues) => {
  const error: { [key in keyof TaskCardDefaultValues]?: string } = {}

  error.title = taskCardValidation.email(values.title)
  error.description = taskCardValidation.description(values.description)

  return error
}
