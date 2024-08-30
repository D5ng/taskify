import { useIntersect } from "@common/hooks"
import { useFetchInvitedDashboard } from "@shared/dashboard/hooks"
import {
  DashboardInvitedListItem,
  DashboardInvitedEmpty,
  InviteLoading,
} from "@features/dashboard/dashboard-invited/components"
import classes from "../invited-list/dashboard-invited-list.module.css"

export default function InvitedFetchList() {
  const { data, lastPage, isLoading, isValidating, setSize, size } = useFetchInvitedDashboard()
  const onIntersect = () => {
    if (isLoading || isValidating || !lastPage!.cursorId) return
    setSize(size + 1)
  }

  const ref = useIntersect<HTMLDivElement>(onIntersect)

  if (data!.length === 0) return <DashboardInvitedEmpty />

  return (
    <>
      <ul>
        {data!.map((invite) =>
          invite.invitations.map((invite) => <DashboardInvitedListItem key={invite.id} {...invite} />)
        )}
      </ul>
      {(isLoading || isValidating) && <InviteLoading />}
      {!lastPage!.cursorId && <p className={classes.message}>더 이상 초대받은 대시보드가 없습니다.</p>}

      <div ref={ref} style={{ width: "1px", height: "1px", marginTop: "10px" }}></div>
    </>
  )
}
