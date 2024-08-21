import type { UpdateDashboardColumn } from "@shared/dashboard/types"
import { dashboardColumnValidation } from "@features/dashboard/dashboard-column/utils"

export const defaultValues = {
  title: "",
}

export const validate = (values: UpdateDashboardColumn) => {
  const error: Partial<UpdateDashboardColumn> = {}

  error.title = dashboardColumnValidation(values.title)

  return error
}
