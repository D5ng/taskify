import { taskCardValidation } from "@/shared/@common/utils/validation"
import { TaskCardDefaultValues } from "../components/dashboard-modal/dashboard-task-card/task-card-create-modal"
import { Member } from "../types"

export type DefaultValues = (member: Member) => TaskCardDefaultValues

export const defaultValues: DefaultValues = (member: Member) => {
  const date = new Date()
  const offset = date.getTimezoneOffset() * 60000
  const dateOffset = new Date(date.getTime() - offset)

  return {
    assignee: member,
    title: "",
    description: "",
    dueDate: dateOffset.toISOString().slice(0, 16),
    tags: [],
    image: "",
  }
}

export const validate = (values: TaskCardDefaultValues) => {
  const error: { [key in keyof TaskCardDefaultValues]?: string } = {}

  error.title = taskCardValidation.email(values.title)
  error.description = taskCardValidation.description(values.description)

  return error
}
