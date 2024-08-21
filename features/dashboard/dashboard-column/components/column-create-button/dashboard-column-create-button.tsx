import Image from "next/image"
import { Button } from "@common/components/ui"
import { useToggle } from "@common/hooks"
import AddVioletIcon from "@/public/images/icons/add-violet-icon.svg"
import classes from "./dashboard-column-create-button.module.css"
import DashboardColumnCreateModal from "../column-modal/dashboard-column-create-modal"

export default function DashboardColumnCreateButton() {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()

  return (
    <div className={classes["button-wrapper"]}>
      {isToggle && <DashboardColumnCreateModal onCloseModal={onCloseToggle} />}
      <Button buttonStyle="outline" className={classes.button} onClick={onOpenToggle}>
        새로운 컬럼 추가하기
        <div className={classes["image-wrapper"]}>
          <Image src={AddVioletIcon} alt="" fill />
        </div>
      </Button>
    </div>
  )
}
