import { useAuthStore } from "@common/hooks"
import { Avatar, Dropdown } from "@common/components/ui"
import classes from "./dashboard-header-profile.module.css"
import { useRouter } from "next/router"

export default function DashboardHeaderProfile() {
  const router = useRouter()
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
        <Dropdown.MenuItem onClick={() => router.push(`/dashboard/my`)}>내 대시보드</Dropdown.MenuItem>
        <Dropdown.MenuItem onClick={() => router.push(`/dashboard/mypage`)}>마이 페이지</Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  )
}
