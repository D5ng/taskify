import Image from "next/image"
import { useToggle } from "@common/hooks"
import { DashboardCreateModal } from "@features/dashboard/dashboard-create-button/components"
import AddVioletIcon from "@/public/images/icons/add-violet-icon.svg"
import classes from "./dashboard-create-button.module.css"

export default function DashboardCreateButton() {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()

  return (
    <li>
      <DashboardCreateModal onCloseModal={onCloseToggle} isToggle={isToggle} />
      <button className={classes.button} onClick={onOpenToggle}>
        <span>새로운 대시보드</span>
        <Image src={AddVioletIcon} alt="" />
      </button>
    </li>
  )
}
