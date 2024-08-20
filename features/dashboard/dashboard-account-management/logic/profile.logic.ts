import type { ProfileDefaultValues } from "@features/dashboard/dashboard-account-management/types"
import { accountNicknameValidation } from "@features/dashboard/dashboard-account-management/utils"

export const defaultValues = (nickname: string, profileImageUrl: string) => ({ nickname, profileImageUrl })

export const validate = (defaultValue: string, values: string) => {
  const error: Partial<ProfileDefaultValues> = {}

  error.nickname = accountNicknameValidation(defaultValue, values)

  return error
}
