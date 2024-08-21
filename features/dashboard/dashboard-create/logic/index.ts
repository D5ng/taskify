import { dashboardValidation } from "@common/utils"
import { COLOR_CHIPS } from "@common/constants"
import type { DashboardData } from "@shared/dashboard/types"

export const defaultValues: DashboardData = {
  title: "",
  color: COLOR_CHIPS[0],
}

export const validate = (values: DashboardData) => {
  const error: Partial<DashboardData> = {}

  error.title = dashboardValidation(values.title)

  return error
}

export const options = {
  isFormReset: true,
}
