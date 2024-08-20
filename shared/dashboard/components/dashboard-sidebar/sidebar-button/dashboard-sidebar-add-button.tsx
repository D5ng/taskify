import Image from "next/image"
import { useToggle } from "@common/hooks"
import { DashboardCreateModal } from "@features/dashboard/dashboard-create-button/components"
import classes from "./dashboard-sidebar-add-button.module.css"

export default function DashboardSidebarAddButton() {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()

  return (
    <>
      <DashboardCreateModal onCloseModal={onCloseToggle} isToggle={isToggle} />
      <button onClick={onOpenToggle} className={classes["sidebar-add-button"]}>
        <Image src="/images/icons/add-icon.svg" alt="대시보드 추가하기" fill />
      </button>
    </>
  )
}
