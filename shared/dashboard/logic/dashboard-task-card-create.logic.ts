import { taskCardValidation } from "@common/utils"
import type { TaskCardDefaultValues } from "@shared/dashboard/types"

export type DefaultValues = (assigneeUserId: number) => TaskCardDefaultValues

export const defaultValues: DefaultValues = (assigneeUserId: number) => {
  const date = new Date()
  const offset = date.getTimezoneOffset() * 60000
  const dateOffset = new Date(date.getTime() - offset)

  return {
    error: "",
    assigneeUserId: assigneeUserId,
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
