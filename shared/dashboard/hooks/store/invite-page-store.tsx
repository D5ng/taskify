import { createSelectors } from "@/shared/@common/utils/store"
import { create } from "zustand"

interface InvitePage {
  currentPage: number
  setCurrentPage: (page: number) => void
}

const useInvitePageStoreBase = create<InvitePage>()((set) => ({
  currentPage: 1,
  setCurrentPage: (page: number) => set(() => ({ currentPage: page })),
}))

const useInvitePageStore = createSelectors(useInvitePageStoreBase)

export default useInvitePageStore
