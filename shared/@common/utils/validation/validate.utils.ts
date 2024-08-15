import {
  formValidationPattern,
  EMAIL_ERRROR_MESSAGE,
  NICKANME_ERROR_MESSAGE,
  PASSWORD_ERROR_MESSAGE,
  PASSWORD_CONFIRM_ERROR_MESSAGE,
} from "./validate.constant"

export function emailValidation(value: string) {
  if (!value.trim().length) return EMAIL_ERRROR_MESSAGE.EMPTY
  if (!formValidationPattern.email.test(value)) return EMAIL_ERRROR_MESSAGE.INVALID
  return ""
}

export function nicknameValidation(value: string) {
  if (!value.trim().length) return NICKANME_ERROR_MESSAGE.EMPTY
  if (!formValidationPattern.nickname.test(value)) return NICKANME_ERROR_MESSAGE.INVALID
  return ""
}

export function passwordValidation(value: string) {
  if (!value.trim().length) return PASSWORD_ERROR_MESSAGE.EMPTY
  if (!formValidationPattern.password.test(value)) return PASSWORD_ERROR_MESSAGE.INVALID
  return ""
}

export function passwordConfirmValidation(passwordValue: string, confirmValue: string) {
  if (!confirmValue.trim().length) return PASSWORD_CONFIRM_ERROR_MESSAGE.EMPTY
  if (!formValidationPattern.passwordConfirm.test(confirmValue)) return PASSWORD_CONFIRM_ERROR_MESSAGE.INVALID
  if (passwordValue !== confirmValue) return PASSWORD_CONFIRM_ERROR_MESSAGE.CONFIRM
  return ""
}

export function isNotEmptyValidation(value: string) {
  return value.trim().length !== 0
}
