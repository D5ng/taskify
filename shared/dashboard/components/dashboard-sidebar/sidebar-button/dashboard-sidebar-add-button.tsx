import Image from "next/image"
import { useToggle } from "@common/hooks"
import { CreateDashboardModal } from "@shared/dashboard/components"
import classes from "./dashboard-sidebar-add-button.module.css"

export default function DashboardSidebarAddButton() {
  const { isToggle, handleOpenToggle, handleCloseToggle } = useToggle()

  return (
    <>
      <CreateDashboardModal onCloseModal={handleCloseToggle} isToggle={isToggle} />
      <button onClick={handleOpenToggle} className={classes["sidebar-add-button"]}>
        <Image src="/images/icons/add-icon.svg" alt="대시보드 추가하기" fill />
      </button>
    </>
  )
}
