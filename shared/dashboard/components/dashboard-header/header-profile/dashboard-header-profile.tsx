import { useRouter } from "next/router"
import { deleteCookie } from "cookies-next"
import { useAuthStore, useDeviceResize } from "@common/hooks"
import { Avatar, Dropdown } from "@common/components/ui"
import classes from "./dashboard-header-profile.module.css"

export default function DashboardHeaderProfile() {
  const router = useRouter()
  const nickname = useAuthStore.use.nickname()
  const profileImage = useAuthStore.use.profileImageUrl()
  const logout = useAuthStore.use.logout()

  const targetValidation = (target: Element) => !!target.closest("button")

  const handleLogout = () => {
    logout()
    deleteCookie("token")
    router.push("/auth/signin")
  }

  const { isMobile } = useDeviceResize()

  return (
    <Dropdown callback={targetValidation} className={classes["header-profile"]}>
      <Dropdown.Trigger>
        <Avatar image={profileImage} nickname={nickname}>
          <Avatar.Image />
          {!isMobile && <Avatar.Name />}
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.MenuItem onClick={() => router.push(`/dashboard/my`)}>내 대시보드</Dropdown.MenuItem>
        <Dropdown.MenuItem onClick={() => router.push(`/dashboard/mypage`)}>마이 페이지</Dropdown.MenuItem>
        <Dropdown.MenuItem onClick={handleLogout}>로그아웃</Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  )
}
