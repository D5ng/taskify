import React from "react"
import { useAuthStore } from "@common/hooks"
import Dropdown from "@common/components/ui/dropdown"
import Avatar from "@common/components/ui/avatar"
import classes from "./dashboard-header-profile.module.css"

export default function DashboardHeaderProfile() {
  const nickname = useAuthStore.use.nickname()
  const profileImage = useAuthStore.use.profileImageUrl()

  const targetValidation = (target: Element) => !!target.closest("button")
  return (
    <Dropdown callback={targetValidation} className={classes["header-profile"]}>
      <Dropdown.Trigger>
        <Avatar image={profileImage} nickname={nickname}>
          <Avatar.Image />
          <Avatar.Name />
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.MenuItem>관리</Dropdown.MenuItem>
        <Dropdown.MenuItem>마이 페이지</Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  )
}
