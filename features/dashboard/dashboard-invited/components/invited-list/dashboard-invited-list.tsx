import { useState } from "react"
import { SearchBar } from "@common/components/ui"
import {
  DashboardInvitedListHeader,
  InvitedSearchList,
  InvitedFetchList,
} from "@features/dashboard/dashboard-invited/components"
import { useFetchInvitedDashboard } from "@shared/dashboard/hooks"
import { Suspensive } from "@common/components"
import classes from "./dashboard-invited-list.module.css"

export default function DashboardInviteList() {
  const invitesQuery = useFetchInvitedDashboard()
  if (invitesQuery.error) throw invitesQuery.error

  const [searchValue, setSearchValue] = useState("")
  const handleSearchValueChange = (value: string) => setSearchValue(value)

  return (
    <>
      <SearchBar onChangeValue={handleSearchValueChange} value={searchValue} />
      <DashboardInvitedListHeader />
      <div className={classes.list}>
        <Suspensive isLoading={invitesQuery.isLoading}>
          {searchValue ? <InvitedSearchList searchValue={searchValue} /> : <InvitedFetchList />}
        </Suspensive>
      </div>
    </>
  )
}
