import Image from "next/image"
import AddVioletIcon from "@/public/images/icons/add-violet-icon.svg"
import { useToggle } from "@common/hooks"
import { TaskCardCreateModal } from "@shared/dashboard/components"
import classes from "./dashboard-task-card-add-button.module.css"

interface Props {
  columnId: number
}

export default function DashboardTaskCardAddButton(props: Props) {
  const { isToggle, onCloseToggle, onOpenToggle } = useToggle()

  return (
    <>
      {isToggle && <TaskCardCreateModal onCloseModal={onCloseToggle} columnId={props.columnId} />}
      <button className={classes["task-card-add-button"]} onClick={onOpenToggle}>
        <div className={classes["task-card-add-button__icon"]}>
          <Image src={AddVioletIcon} alt="" fill />
        </div>
      </button>
    </>
  )
}
