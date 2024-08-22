import { Invite } from "@/shared/dashboard/types"
import { emailValidation } from "@common/utils/validation"
import { DefaultValues } from "@features/dashboard/dashboard-invite-modal/types"

export const defaultValues: DefaultValues = {
  email: "",
}

export const validate = (values: DefaultValues, inviteData: Invite[] | undefined) => {
  const error: Partial<DefaultValues> = {}

  error.email = emailValidation(values.email)

  return error
}
