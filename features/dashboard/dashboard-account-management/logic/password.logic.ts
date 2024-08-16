import { passwordConfirmValidation, passwordValidation } from "@/shared/@common/utils/validation"
import { PasswordDefaultValues } from "../types"

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
