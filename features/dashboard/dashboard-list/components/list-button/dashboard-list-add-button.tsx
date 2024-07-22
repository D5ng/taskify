import Image from "next/image"
import { useToggle } from "@common/hooks"
import { CreateDashboardModal } from "@dashboard/modal"
import AddVioletIcon from "@/public/images/icons/add-violet-icon.svg"
import classes from "./dashboard-list-add-button.module.css"

export default function DashboardListAddButton() {
  const { isToggle, handleOpenToggle, handleCloseToggle } = useToggle()

  return (
    <li>
      <CreateDashboardModal onCloseModal={handleCloseToggle} isToggle={isToggle} />
      <button className={classes.layout} onClick={handleOpenToggle}>
        <span>새로운 대시보드</span>
        <Image src={AddVioletIcon} alt="" />
      </button>
    </li>
  )
}
