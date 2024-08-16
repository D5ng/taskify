import { isAxiosError } from "axios"
import { AuthApiInstance } from "@common/services"
import { SetError } from "@common/types"
import { PasswordDefaultValues } from "../types"

export default function useUpdatePassword(setError: SetError<PasswordDefaultValues>) {
  const onSubmit = async (values: PasswordDefaultValues) => {
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
