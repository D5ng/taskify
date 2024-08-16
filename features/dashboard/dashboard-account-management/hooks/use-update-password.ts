import { isAxiosError } from "axios"
import { AuthApiInstance } from "@common/services"
import { SetError } from "@common/types"
import { DefaultValues } from "../types"

export default function useUpdatePassword(setError: SetError<DefaultValues>) {
  const onSubmit = async (values: DefaultValues) => {
    try {
      await AuthApiInstance.updatePassword({
        password: values.currentPassword,
        newPassword: values.newPassword,
      })
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        setError({
          newPassword: error.response.data.message,
          newPasswordConfirm: error.response.data.message,
        })
      }
    }
  }

  return onSubmit
}
