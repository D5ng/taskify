import { formValidationPattern } from "./validate.constant"

export function emailValidation(value: string) {
  return formValidationPattern.email.test(value)
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

export function isImageValidation({ ...state }) {
  const defaultValidation = state.manager && state.title && state.description && state.deadline && state.hashtags
  return !!defaultValidation
}
