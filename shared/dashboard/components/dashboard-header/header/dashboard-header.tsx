import { PropsWithChildren } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useToggle } from "@common/hooks"
import { DashboardHeaderDetail, DashboardHeaderProfile } from "@shared/dashboard/components"
import type { Member } from "@shared/dashboard/types"
import classes from "./dashboard-header.module.css"

interface DashboardHeaderProps extends PropsWithChildren {
  title?: string | undefined
  members?: Member[]
}

export default function DashboardHeader(props: DashboardHeaderProps) {
  const router = useRouter()
  const id = router.query.id
  const { isToggle, handleOpenToggle, handleCloseToggle } = useToggle()

  return (
    <header className={classes.header}>
      <div className={classes["header-layout"]}>
        <h2 className={classes["header-title"]}>
          {props.title ? props.title : <Link href="/dashboard/my">내 대시보드</Link>}
        </h2>
        <div className={classes["flex-layout"]}>
          {id && <DashboardHeaderDetail members={props.members!} className={classes["button-layout"]} />}
          <div className={classes["profile-wrapper"]}>
            <DashboardHeaderProfile
              isToggle={isToggle}
              onOpenToggle={handleOpenToggle}
              onCloseToggle={handleCloseToggle}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
