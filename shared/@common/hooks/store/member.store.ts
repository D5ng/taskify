import { create } from "zustand"
import { createSelectors } from "@common/utils/store"
import { Member } from "@common/types"

interface MemberStore {
  members: Member[]
  setMembers: (members: Member[]) => void
}

const useMemberStoreBase = create<MemberStore>()((set) => ({
  members: [],
  setMembers: (members: Member[]) => set(() => ({ members })),
}))

const useMemberStore = createSelectors(useMemberStoreBase)

export default useMemberStore
