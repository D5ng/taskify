import { Invite } from "@/shared/dashboard/types"
import { emailValidation } from "@common/utils/validation"
import { DefaultValues } from "@features/dashboard/dashboard-invite-modal/types"

export const defaultValues: DefaultValues = {
  email: "",
}

export const validate = (values: DefaultValues, inviteData: Invite[] | undefined) => {
  const error: Partial<DefaultValues> = {}

  error.email = emailValidation(values.email)

  const existingInvite = inviteData?.find((invite) => invite.invitee.email === values.email)
  if (existingInvite) error.email = "이미 등록된 이메일입니다."

  return error
}
