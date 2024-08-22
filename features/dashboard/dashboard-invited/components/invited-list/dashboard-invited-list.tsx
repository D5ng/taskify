import { useState } from "react"
import { Loading, SearchBar } from "@common/components/ui"
import { useIntersect } from "@common/hooks"
import { useFetchInvitedDashboard } from "@shared/dashboard/hooks"
import {
  DashboardInvitedListHeader,
  DashboardInvitedListItem,
  DashboardInvitedEmpty,
} from "@features/dashboard/dashboard-invited/components"
import { useSearchInvited } from "@features/dashboard/dashboard-invited/hooks"
import classes from "./dashboard-invited-list.module.css"

export default function DashboardInviteList() {
  const { data, lastPage, isLoading, isValidating, setSize, size } = useFetchInvitedDashboard()
  const onIntersect = () => {
    if (isLoading || isValidating || !lastPage!.cursorId) return
    setSize(size + 1)
  }
  const ref = useIntersect<HTMLDivElement>(onIntersect)

  const [searchValue, setSearchValue] = useState("")
  const handleSearchValueChange = (value: string) => setSearchValue(value)

  const { searchInviteData, isSearchResult, searchInviteLoading, searchEmptyResult } = useSearchInvited(searchValue)

  if (data!.length === 0) return <DashboardInvitedEmpty />

  return (
    <>
      <SearchBar onChangeValue={handleSearchValueChange} value={searchValue} />
      <DashboardInvitedListHeader />
      <ul>
        {isSearchResult &&
          searchInviteData!.invitations.map((invite) => <DashboardInvitedListItem key={invite.id} {...invite} />)}

        {!searchValue &&
          !isSearchResult &&
          data!.map((invite) =>
            invite.invitations.map((invite) => <DashboardInvitedListItem key={invite.id} {...invite} />)
          )}
      </ul>
      {(isLoading || isValidating || searchInviteLoading) && (
        <div className={classes.loading}>
          <Loading />
        </div>
      )}
      {searchEmptyResult && (
        <p className={classes.message}>검색된 &quot;{searchValue}&quot; 결과를 찾을 수 없습니다.</p>
      )}
      {!searchValue && !lastPage!.cursorId && <p className={classes.message}>더 이상 초대받은 대시보드가 없습니다.</p>}
      <div ref={ref} style={{ width: "1px", height: "1px", marginTop: "10px" }}></div>
    </>
  )
}
