import { SearchBar } from "@common/components/ui"
import { useFetchInvitedDashboard, useInvitedPageStore } from "@/shared/dashboard/hooks"

import {
  DashboardInvitedListHeader,
  DashboardInvitedListItem,
  DashboardInvitedEmpty,
} from "@features/dashboard/dashboard-invited/components"
import { useIntersect } from "@/shared/@common/hooks"
import { useState } from "react"

export default function DashboardInviteList() {
  const currentPage = useInvitedPageStore.use.currentPage()
  const [cursorId, setCursorId] = useState<null | number>(null)

  const invitesQuery = useFetchInvitedDashboard()

  const onIntersect = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => {
    invitesQuery.setSize(invitesQuery.size + 1)
  }

  const ref = useIntersect<HTMLDivElement>(onIntersect)

  // console.log(invitesQuery.data)

  if (invitesQuery.data?.length === 0) return <DashboardInvitedEmpty />

  return (
    <>
      <SearchBar />
      <DashboardInvitedListHeader />
      <ul>
        {invitesQuery.data!.map((invite) =>
          invite.invitations.map((invite) => <DashboardInvitedListItem key={invite.id} {...invite} />)
        )}
      </ul>
      <div ref={ref} style={{ width: "1px", height: "10px", marginTop: "50px" }}></div>
    </>
  )
}
