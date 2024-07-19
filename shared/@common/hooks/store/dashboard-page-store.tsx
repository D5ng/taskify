import { create } from "zustand"
import { createSelectors } from "@common/utils/store"

interface DashboardPage {
  currentPage: number
  setCurrentPage: (page: number) => void
}

const useDashboardPageStoreBase = create<DashboardPage>()((set) => ({
  currentPage: 1,
  setCurrentPage: (page: number) => set(() => ({ currentPage: page })),
}))

const useDashboardPageStore = createSelectors(useDashboardPageStoreBase)

export default useDashboardPageStore
