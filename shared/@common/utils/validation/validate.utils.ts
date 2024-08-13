import { formValidationPattern } from "./validate.constant"

export function emailValidation(value: string) {
  if (!value.trim().length) return EMAIL_ERRROR_MESSGAE.EMPTY
  if (!formValidationPattern.email.test(value)) return EMAIL_ERRROR_MESSGAE.INVALID
  return ""
}

export function nicknameValidation(value: string) {
  if (value.trim().length < 2) return false
  return formValidationPattern.nickname.test(value)
}

export function passwordValidation(value: string) {
  return formValidationPattern.password.test(value)
}

export function passwordConfirmValidation(passwordValue: string, confirmValue: string) {
  if (confirmValue === "") return false
  return passwordValue === confirmValue
}

export function isNotEmptyValidation(value: string) {
  return value.trim().length !== 0
}

export function AuthValidation(value: string, field: FormFields) {
  if (!value.trim().length) return ERROR_MESSAGE[field].EMPTY
  return formValidationPattern[field]
}

export const EMAIL_ERRROR = {
  EMPTY: "이메일을 입력해주세요.",
  INVALID: "이메일 형식으로 작성해주세요.",
}

export const NICKANME_ERROR = {
  EMPTY: "닉네임을 입력해주세요.",
  INVALID: "닉네임은 10자 이하로 작성해주세요.",
}

export const PASSWORD_ERROR = {
  EMPTY: "비밀번호를 입력해주세요.",
  INVALID: "비밀번호는 8자 이상 입력해주세요.",
}

export const PASSWORD_CONFIRM_ERROR = {
  EMPTY: "비밀번호를 다시 입력해주세요.",
  INVALID: "비밀번호가 일치하지 않아요.",
}

export const ERROR_MESSAGE = {
  email: EMAIL_ERRROR,
  nickname: NICKANME_ERROR,
  password: PASSWORD_ERROR,
  passwordConfirm: PASSWORD_CONFIRM_ERROR,
}

export type FormFields = keyof typeof ERROR_MESSAGE
