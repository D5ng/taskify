import { isEmptyValidation } from "@common/utils"
import { DASHBOARD_TASK_CARD_ERROR_MESSAGE } from "@features/dashboard/dashboard-task-card/constants"

export const taskCardValidation = {
  email: (value: string) => (isEmptyValidation(value) ? DASHBOARD_TASK_CARD_ERROR_MESSAGE.TITLE_EMPTY : ""),
  description: (value: string) => (isEmptyValidation(value) ? DASHBOARD_TASK_CARD_ERROR_MESSAGE.DESCRIPTION_EMPTY : ""),
}
