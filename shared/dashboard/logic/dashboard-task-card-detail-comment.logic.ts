import { taskCardCommentValidation, taskCardValidation } from "@common/utils"
import type { CommentData } from "@shared/dashboard/types"

export const defaultValues: CommentData = {
  content: "",
}

export const validate = (values: CommentData) => {
  const error: { [key in keyof CommentData]?: string } = {}

  error.content = taskCardCommentValidation(values.content)

  return error
}
