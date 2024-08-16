import { DASHBOARD_COLUMN_TITLE_ERROR_MESSAGE, isNotEmptyValidation } from "@/shared/@common/utils/validation"
import { UpdateDashboardColumn } from "../types"

export const validate = (values: UpdateDashboardColumn) => {
  const error: Partial<UpdateDashboardColumn> = {}

  error.title = isNotEmptyValidation(values.title) ? "" : DASHBOARD_COLUMN_TITLE_ERROR_MESSAGE.EMPTY

  return error
}
