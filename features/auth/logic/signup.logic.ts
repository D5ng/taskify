import { DefaultValues } from "../types/signup.type"
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

export const validate = (values: DefaultValues) => {
  const error = {
    email: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
  }

  error.email = emailValidation(values.email)

  if (!nicknameValidation(values.nickname)) error.nickname = "닉네임 형식이 유효하지 않습니다."
  if (!passwordValidation(values.password)) error.password = "비밀번호 형식이 유효하지 않습니다."
  if (!passwordValidation(values.passwordConfirm)) error.passwordConfirm = "비밀번호가 일치하지 않습니다."

  return error
}

export const onSubmit = (values: DefaultValues) => {}
