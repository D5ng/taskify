import Image from "next/image"
import { useToggle } from "@common/hooks"
import { CreateDashboardModal } from "@shared/dashboard/components"
import AddVioletIcon from "@/public/images/icons/add-violet-icon.svg"
import classes from "./dashboard-list-add-button.module.css"

export default function DashboardListAddButton() {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()

  return (
    <li>
      <CreateDashboardModal onCloseModal={onCloseToggle} isToggle={isToggle} />
      <button className={classes.layout} onClick={onOpenToggle}>
        <span>새로운 대시보드</span>
        <Image src={AddVioletIcon} alt="" />
      </button>
    </li>
  )
}
