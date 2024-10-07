import { useState } from "react"
import { SearchBar } from "@common/components/ui"
import {
  DashboardInvitedListHeader,
  InvitedSearchList,
  InvitedFetchList,
} from "@features/dashboard/dashboard-invited/components"
import { useFetchInvitedDashboard } from "@shared/dashboard/hooks"
import { Suspensive } from "@common/components"

export default function DashboardInviteList() {
  const invitesQuery = useFetchInvitedDashboard()
  if (invitesQuery.error) throw invitesQuery.error

  const [searchValue, setSearchValue] = useState("")
  const handleSearchValueChange = (value: string) => setSearchValue(value)

  return (
    <Suspensive isLoading={invitesQuery.isLoading}>
      <SearchBar onChangeValue={handleSearchValueChange} value={searchValue} />
      <DashboardInvitedListHeader />
      {searchValue ? <InvitedSearchList searchValue={searchValue} /> : <InvitedFetchList />}
    </Suspensive>
  )
}
