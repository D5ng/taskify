import { formValidationPattern, NICKANME_ERROR_MESSAGE } from "@common/constants"
import { isEmptyValidation } from "@common/utils"

export function accountNicknameValidation(defaultValues: string, value: string) {
  if (isEmptyValidation(value)) return NICKANME_ERROR_MESSAGE.EMPTY
  if (!formValidationPattern.nickname.test(value)) return NICKANME_ERROR_MESSAGE.INVALID
  if (defaultValues === value) return NICKANME_ERROR_MESSAGE.NOT_SAME
  return ""
}
