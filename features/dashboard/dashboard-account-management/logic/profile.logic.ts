import { nicknameValidation } from "@/shared/@common/utils/validation"
import { ProfileDefaultValues } from "../types"

export const validate = (values: ProfileDefaultValues) => {
  const error: Partial<ProfileDefaultValues> = {}

  error.nickname = nicknameValidation(values.nickname)

  return error
}
