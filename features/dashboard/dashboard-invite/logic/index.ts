import { emailValidation } from "@common/utils/validation"
import { DefaultValues } from "@features/dashboard/dashboard-invite/types"

export const defaultValues: DefaultValues = {
  email: "",
}

export const validate = (values: DefaultValues) => {
  const error: Partial<DefaultValues> = {}

  error.email = emailValidation(values.email)

  return error
}
