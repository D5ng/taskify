import type { CommentData } from "@shared/dashboard/types"
import { taskCardCommentValidation } from "@features/dashboard/dashboard-task-detail/utils"

export const defaultValues = (content?: string): CommentData => ({
  content: content ? content : "",
})

export const validate = (values: CommentData) => {
  const error: { [key in keyof CommentData]?: string } = {}

  error.content = taskCardCommentValidation(values.content)

  return error
}
