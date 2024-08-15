import Link from "next/link"
import { DashboardHeaderProfile } from "@shared/dashboard/components"
import classes from "./dashboard-header.module.css"

export default function DashboardHeader() {
  return (
    <header className={classes.header}>
      <div className={classes["header-layout"]}>
        <h2 className={classes["header-title"]}>
          <Link href="/dashboard/my">내 대시보드</Link>
        </h2>
        <div className={classes["flex-layout"]}>
          <div className={classes["profile-wrapper"]}>
            <DashboardHeaderProfile />
          </div>
        </div>
      </div>
    </header>
  )
}
