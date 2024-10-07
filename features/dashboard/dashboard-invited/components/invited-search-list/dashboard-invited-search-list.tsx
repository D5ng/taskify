import { DashboardInvitedListItem, InviteLoading } from "@features/dashboard/dashboard-invited/components"
import { useSearchInvited } from "@features/dashboard/dashboard-invited/hooks"
import classes from "../invited-list/dashboard-invited-list.module.css"

interface Props {
  searchValue: string
}

export default function InvitedSearchList({ searchValue }: Props) {
  const { searchInviteData, isSearchResult, searchInviteLoading, searchEmptyResult } = useSearchInvited(searchValue)
  console.log(searchEmptyResult)
  return (
    <div className={classes.list}>
      <ul>
        {isSearchResult &&
          searchInviteData!.invitations.map((invite) => <DashboardInvitedListItem key={invite.id} {...invite} />)}
      </ul>
      {searchInviteLoading && <InviteLoading />}
      {searchEmptyResult && (
        <p className={classes.message}>검색된 &quot;{searchValue}&quot; 결과를 찾을 수 없습니다.</p>
      )}
    </div>
  )
}
