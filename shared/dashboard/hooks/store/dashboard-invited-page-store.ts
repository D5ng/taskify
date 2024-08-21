import { createSelectors } from "@/shared/@common/utils/store"
import { create } from "zustand"

interface InvitedDashboardPage {
  currentPage: number
  setCurrentPage: (page: number) => void
}

const useInvitedPageStoreBase = create<InvitedDashboardPage>()((set) => ({
  currentPage: 1,
  setCurrentPage: (page: number) => set(() => ({ currentPage: page })),
}))

const useInvitedPageStore = createSelectors(useInvitedPageStoreBase)

export default useInvitedPageStore
