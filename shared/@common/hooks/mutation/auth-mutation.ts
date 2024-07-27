import useSWRMutation from "swr/mutation"
import { useFetchProfile } from "@common/hooks"
import { AuthApiInstance } from "@common/services"

export function useProfileMutation() {
  const { mutate } = useFetchProfile()

  return useSWRMutation("users/me", AuthApiInstance.updateProfile, {
    onError(err, key, config) {
      console.log(err)
    },

    onSuccess() {
      mutate()
    },
  })
}
