import { isEmptyValidation } from "@common/utils"
import { DASHBOARD_TASK_CARD_COMMENT_ERROR_MESSAGE } from "@features/dashboard/dashboard-task-detail/constants"

export function taskCardCommentValidation(value: string) {
  if (isEmptyValidation(value)) return DASHBOARD_TASK_CARD_COMMENT_ERROR_MESSAGE.EMPTY
  return ""
}
