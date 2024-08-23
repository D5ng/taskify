import { formValidationPattern, NICKANME_ERROR_MESSAGE } from "@common/constants"
import { isEmptyValidation } from "@common/utils"
import { ProfileDefaultValues } from "../types"

export function accountNicknameValidation(
  defaultValues: ProfileDefaultValues,
  existingNickname: string,
  isUpdateImage: boolean
) {
  if (isEmptyValidation(defaultValues.nickname)) return NICKANME_ERROR_MESSAGE.EMPTY
  if (!formValidationPattern.nickname.test(defaultValues.nickname)) return NICKANME_ERROR_MESSAGE.INVALID
  if (!isUpdateImage && defaultValues.nickname === existingNickname) return NICKANME_ERROR_MESSAGE.NOT_SAME
  return ""
}
