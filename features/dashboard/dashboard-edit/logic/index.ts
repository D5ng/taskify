import { ColorChipColor } from "@common/types"
import { dashboardEditValidation } from "@common/utils"
import { DashboardData } from "@shared/dashboard/types"

export const defaultValues = ({ title, color }: DashboardData) => ({ title, color })

export const validate = (defaultValues: DashboardData, existingTitle: string, existingColor: ColorChipColor) => {
  const error: Partial<DashboardData> = {}
  const isUpdateColor = defaultValues.color !== existingColor
  error.title = dashboardEditValidation(defaultValues.title, existingTitle, isUpdateColor)

  return error
}

export const options = {
  isSuccessTouchedReset: true,
}
