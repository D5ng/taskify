import { SigninValues } from "@features/auth/types"
import { emailValidation, passwordValidation } from "@common/utils/validation"

export const defaultValues: SigninValues = {
  form: "",
  email: "",
  password: "",
}

export const validate = (values: SigninValues) => {
  const error: Partial<SigninValues> = {}

  error.email = emailValidation(values.email)
  error.password = passwordValidation(values.password)

  return error
}
