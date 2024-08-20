import { dashboardValidation } from "@common/utils/validation"
import { COLOR_CHIPS } from "../constants"
import { DashboardData } from "../types"

export const defaultValues: DashboardData = {
  title: "",
  color: COLOR_CHIPS[0],
}

export const validate = (values: DashboardData) => {
  const error: Partial<DashboardData> = {}

  error.title = dashboardValidation(values.title)

  return error
}
