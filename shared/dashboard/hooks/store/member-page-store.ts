import { create } from "zustand"
import { createSelectors } from "@common/utils/store"

interface MemberPage {
  currentPage: number
  setCurrentPage: (page: number) => void
}

const useMemberPageStoreBase = create<MemberPage>()((set) => ({
  currentPage: 1,
  setCurrentPage: (page: number) => set(() => ({ currentPage: page })),
}))

const useMemberPageStore = createSelectors(useMemberPageStoreBase)

export default useMemberPageStore
