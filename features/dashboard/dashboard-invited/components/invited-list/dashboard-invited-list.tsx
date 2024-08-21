import { Loading, SearchBar } from "@common/components/ui"
import { useFetchInvitedDashboard } from "@/shared/dashboard/hooks"

import {
  DashboardInvitedListHeader,
  DashboardInvitedListItem,
  DashboardInvitedEmpty,
} from "@features/dashboard/dashboard-invited/components"
import { useIntersect } from "@/shared/@common/hooks"
import classes from "./dashboard-invited-list.module.css"
import { ChangeEvent, useEffect, useState } from "react"
import InvitedDashboardInstance from "@/shared/dashboard/services/dashboard-invited.api"
import { InvitedDashboardResponse } from "@/shared/dashboard/types"

export default function DashboardInviteList() {
  const { data, lastPage, isLoading, isValidating, setSize, size } = useFetchInvitedDashboard()

  const onIntersect = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => {
    if (isLoading || isValidating || !lastPage!.cursorId) return
    setSize(size + 1)
  }
  const ref = useIntersect<HTMLDivElement>(onIntersect)

  // title까지
  const [title, setTitle] = useState("")
  const handleChangeTitle = (value: string) => setTitle(value)

  const [result, setResult] = useState<InvitedDashboardResponse | null>(null)

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (title) {
        const result = await InvitedDashboardInstance.fetchInvitedDashboard(`invitations?size=5&title=${title}`)
        setResult(result)
      } else {
        setResult(null)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [title])

  if (data!.length === 0) return <DashboardInvitedEmpty />

  // result가 있으면 result를 우선적으로 보여주어야함.

  return (
    <>
      <SearchBar onChangeValue={handleChangeTitle} value={title} />
      <DashboardInvitedListHeader />
      <ul>
        {title &&
          result &&
          result.invitations.map((invite) => <DashboardInvitedListItem key={invite.id} {...invite} />)}
        {!title &&
          data!.map((invite) =>
            invite.invitations.map((invite) => <DashboardInvitedListItem key={invite.id} {...invite} />)
          )}
      </ul>
      {(isLoading || isValidating) && (
        <div className={classes.loading}>
          <Loading />
        </div>
      )}
      {!lastPage!.cursorId && <p className={classes.message}>더 이상 초대받은 대시보드가 없습니다.</p>}
      <div ref={ref} style={{ width: "1px", height: "1px", marginTop: "10px" }}></div>
    </>
  )
}
