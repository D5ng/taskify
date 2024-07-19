import Image from "next/image"
import { useToggle } from "@common/hooks"
import AddVioletIcon from "@/public/images/icons/add-violet-icon.svg"
import classes from "./dashboard-list-add-button.module.css"

export default function DashboardListAddButton() {
  return (
    <li>
      <button className={classes.layout}>
        <span>새로운 대시보드</span>
        <Image src={AddVioletIcon} alt="" />
      </button>
    </li>
  )
}
