import { SignupDefaultValues } from "@features/auth/types"
import {
  emailValidation,
  nicknameValidation,
  passwordValidation,
  passwordConfirmValidation,
} from "@common/utils/validation"

export const defaultValues = {
  email: "",
  nickname: "",
  password: "",
  passwordConfirm: "",
}

export const validate = (values: SignupDefaultValues) => {
  const error: Partial<SignupDefaultValues> = {
    email: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
  }

  error.email = emailValidation(values.email)
  error.nickname = nicknameValidation(values.nickname)
  error.password = passwordValidation(values.password)
  error.passwordConfirm = passwordConfirmValidation(values.password, values.passwordConfirm)

  return error
}
