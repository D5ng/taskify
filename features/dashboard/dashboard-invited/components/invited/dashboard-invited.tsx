import { DashboardInvitedList } from "@features/dashboard/dashboard-invited/components"
import { DashboardErrorFallback, ErrorBoundary } from "@shared/dashboard/components"
import classes from "./dashboard-invited.module.css"

export default function DashboardInvited() {
  return (
    <section className={`${classes.invite} dashboard-inner-layout`}>
      <h2 className={classes["invite-title"]}>초대받은 대시보드</h2>
      <ErrorBoundary fallback={DashboardErrorFallback} onReset={() => {}}>
        <DashboardInvitedList />
      </ErrorBoundary>
    </section>
  )
}
