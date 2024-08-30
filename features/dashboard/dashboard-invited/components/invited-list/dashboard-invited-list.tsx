import { useState } from "react"
import { SearchBar } from "@common/components/ui"
import {
  DashboardInvitedListHeader,
  InvitedSearchList,
  InvitedFetchList,
} from "@features/dashboard/dashboard-invited/components"

export default function DashboardInviteList() {
  const [searchValue, setSearchValue] = useState("")
  const handleSearchValueChange = (value: string) => setSearchValue(value)

  return (
    <>
      <SearchBar onChangeValue={handleSearchValueChange} value={searchValue} />
      <DashboardInvitedListHeader />
      {searchValue ? <InvitedSearchList searchValue={searchValue} /> : <InvitedFetchList />}
    </>
  )
}
