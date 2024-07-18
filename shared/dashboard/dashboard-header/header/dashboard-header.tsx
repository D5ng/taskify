import { PropsWithChildren } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useToggle, useAuthStore } from "@common/hooks"
import { Member } from "@common/types"

import Avatar from "@common/components/ui/avatar-compound/avatar"
import { DashboardHeaderDetail, DropdownHeaderProfile } from "@/shared/dashboard/dashboard-header"
import classes from "./dashboard-header.module.css"

interface DashboardHeaderProps extends PropsWithChildren {
  title?: string | undefined
  members?: Member[]
}

export default function DashboardHeader(props: DashboardHeaderProps) {
  const router = useRouter()
  const id = router.query.id
  const nickname = useAuthStore.use.nickname()
  const profileImage = useAuthStore.use.profileImageUrl()
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
            <button className={classes["profile-layout"]} onClick={handleOpenToggle}>
              <Avatar image={profileImage} nickname={nickname}>
                <Avatar.Image />
                <Avatar.Name />
              </Avatar>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
