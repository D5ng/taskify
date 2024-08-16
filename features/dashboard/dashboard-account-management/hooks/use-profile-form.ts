import { useAuthStore, useProfileMutation } from "@/shared/@common/hooks"
import { ProfileDefaultValues } from "../types"

export default function useProfileForm() {
  const profileMutation = useProfileMutation()
  const updateProfile = useAuthStore.use.updateProfile()

  const onSubmit = async ({ nickname, profileImageUrl }: ProfileDefaultValues) => {
    const data = {
      nickname,
      profileImageUrl,
    }

    await profileMutation.trigger(data)
    updateProfile(data)
  }

  return onSubmit
}
