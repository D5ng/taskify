import { isEmptyValidation } from "@common/utils"
import { DASHBOARD_COLUMN_TITLE_ERROR_MESSAGE } from "@features/dashboard/dashboard-column/constant"

export function dashboardColumnValidation(value: string) {
  if (isEmptyValidation(value)) return DASHBOARD_COLUMN_TITLE_ERROR_MESSAGE.EMPTY
  return ""
}
