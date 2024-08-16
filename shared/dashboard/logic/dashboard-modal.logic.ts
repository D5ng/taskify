import { DASHBOARD_TITLE_ERROR_MESSAGE, isNotEmptyValidation } from "@common/utils/validation"
import { COLOR_CHIPS } from "../constants"
import { DashboardData } from "../types"

export const defaultValues: DashboardData = {
  title: "",
  color: COLOR_CHIPS[0],
}

export const validate = (values: DashboardData) => {
  const error: Partial<DashboardData> = {}

  error.title = isNotEmptyValidation(values.title) ? "" : DASHBOARD_TITLE_ERROR_MESSAGE.EMPTY

  return error
}
