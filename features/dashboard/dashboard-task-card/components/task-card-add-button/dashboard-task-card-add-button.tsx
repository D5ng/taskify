import Image from "next/image"
import AddVioletIcon from "@/public/images/icons/add-violet-icon.svg"
import { useToggle } from "@common/hooks"
import { DashboardTaskCardCreateModal } from "@features/dashboard/dashboard-task-card/components"
import classes from "./dashboard-task-card-add-button.module.css"

interface Props {
  columnId: number
}

export default function DashboardTaskCardAddButton(props: Props) {
  const { isToggle, onCloseToggle, onOpenToggle } = useToggle()

  return (
    <>
      {isToggle && <DashboardTaskCardCreateModal onCloseModal={onCloseToggle} columnId={props.columnId} />}
      <button className={classes["task-card-add-button"]} onClick={onOpenToggle}>
        <div className={classes["task-card-add-button__icon"]}>
          <Image src={AddVioletIcon} alt="" fill />
        </div>
      </button>
    </>
  )
}
