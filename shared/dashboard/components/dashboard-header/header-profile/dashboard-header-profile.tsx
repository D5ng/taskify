import React from "react"
import { useRouter } from "next/router"
import { User } from "@common/types"
import Dropdown from "@common/components/ui/dropdown"
import Avatar from "@common/components/ui/avatar"
import classes from "./dashboard-header-profile.module.css"

interface Props {
  user: User
}

export default function DashboardHeaderProfile(props: Props) {
  const router = useRouter()
  const targetValidation = (target: Element) => !!target.closest("button")

  return (
    <Dropdown callback={targetValidation} className={classes["header-profile"]}>
      <Dropdown.Trigger>
        <Avatar image={props.user.profileImageUrl} nickname={props.user.nickname}>
          <Avatar.Image />
          <Avatar.Name />
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.MenuItem onClick={() => router.push(`/dashboard/my`)}>내 대시보드</Dropdown.MenuItem>
        <Dropdown.MenuItem onClick={() => router.push(`/dashboard/mypage`)}>마이 페이지</Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  )
}
