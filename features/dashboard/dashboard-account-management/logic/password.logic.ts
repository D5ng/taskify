import { passwordConfirmValidation, passwordValidation } from "@common/utils"
import type { PasswordDefaultValues } from "@features/dashboard/dashboard-account-management/types"

export const defaultValues: PasswordDefaultValues = {
  currentPassword: "",
  newPassword: "",
  newPasswordConfirm: "",
}

export const validate = (values: PasswordDefaultValues) => {
  const error: Partial<PasswordDefaultValues> = {}

  error.currentPassword = passwordValidation(values.currentPassword)
  error.newPassword = passwordValidation(values.newPassword)
  error.newPasswordConfirm = passwordConfirmValidation(values.newPassword, values.newPasswordConfirm)

  return error
}
