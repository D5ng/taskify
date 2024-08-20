import { dashboardValidation } from "@common/utils"
import { DashboardData } from "@shared/dashboard/types"

export const defaultValues = ({ title, color }: DashboardData) => ({ title, color })

export const validate = (values: DashboardData) => {
  const error: Partial<DashboardData> = {}

  error.title = dashboardValidation(values.title)

  return error
}
