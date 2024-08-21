import { Suspensive } from "@common/components"
import { DashboardInvitedList } from "@features/dashboard/dashboard-invited/components"
import { useFetchInvitedDashboard } from "@shared/dashboard/hooks"
import classes from "./dashboard-invited.module.css"

export default function DashboardInvited() {
  const invitesQuery = useFetchInvitedDashboard()

  return (
    <section className={`${classes.invite} dashboard-inner-layout`}>
      <h2 className={classes["invite-title"]}>초대받은 대시보드</h2>
      <Suspensive isLoading={invitesQuery.isLoading}>
        <DashboardInvitedList />
      </Suspensive>
    </section>
  )
}
