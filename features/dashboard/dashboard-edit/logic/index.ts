import { DASHBOARD_TITLE_ERROR_MESSAGE, isNotEmptyValidation } from "@common/utils/validation"
import { DashboardData } from "@shared/dashboard/types"

export const validate = (values: DashboardData) => {
  const error: Partial<DashboardData> = {}

  error.title = isNotEmptyValidation(values.title) ? "" : DASHBOARD_TITLE_ERROR_MESSAGE.EMPTY

  return error
}
