import type { ProfileDefaultValues } from "@features/dashboard/dashboard-account-management/types"
import { accountNicknameValidation } from "@features/dashboard/dashboard-account-management/utils"

export const defaultValues = (nickname: string, profileImageUrl: string) => ({ nickname, profileImageUrl })

export const validate = (
  defaultValues: ProfileDefaultValues,
  existingNickname: string,
  existingImage: string | null
) => {
  const error: Partial<ProfileDefaultValues> = {}
  const isUpdateImage = defaultValues.profileImageUrl !== existingImage
  error.nickname = accountNicknameValidation(defaultValues, existingNickname, isUpdateImage)

  return error
}
