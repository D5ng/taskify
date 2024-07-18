import { AuthStore } from "@common/types"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { createSelectors } from "@common/utils/store"

export const useAuthStoreBase = create<AuthStore>()(
  persist(
    (set) => ({
      accessToken: "",
      email: "",
      id: 0,
      nickname: "",
      profileImageUrl: null,

      updateAuthState: ({ user, accessToken }) =>
        set(() => ({
          id: user.id,
          email: user.email,
          nickname: user.nickname,
          profileImageUrl: user.profileImageUrl,
          accessToken,
        })),

      updateProfile: ({ nickname, profileImageUrl }) =>
        set(() => ({
          nickname,
          profileImageUrl,
        })),
    }),
    {
      name: "authStore",
    }
  )
)

export const useAuthStore = createSelectors(useAuthStoreBase)

export default useAuthStore
