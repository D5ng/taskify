import { create } from "zustand"
import { createSelectors } from "@common/utils/store"
import { ColorChipColor } from "@/shared/@common/types"

interface DashboardStore {
  title: string
  color: ColorChipColor
  setDashboard: (value: { title: string; color: ColorChipColor }) => void
}

const useDashboardStoreBase = create<DashboardStore>()((set) => ({
  title: "",
  color: "#7AC555",
  setDashboard: (value: { title: string; color: ColorChipColor }) =>
    set(() => ({ title: value.title, color: value.color })),
}))

const useDashboardStore = createSelectors(useDashboardStoreBase)

export default useDashboardStore
