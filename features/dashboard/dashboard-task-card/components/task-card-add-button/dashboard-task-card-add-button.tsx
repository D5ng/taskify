import Image from "next/image"
import AddVioletIcon from "@/public/images/icons/add-violet-icon.svg"
// import { TaskCardCreateModal } from "@features/dashboard/dashboard-task-card/components"
import { useToggle } from "@common/hooks"
import classes from "./dashboard-task-card-add-button.module.css"

interface DashboardTaskCardAddButtonProps {
  columnId: number
}

export default function DashboardTaskCardAddButton(props: DashboardTaskCardAddButtonProps) {
  const { isToggle, onCloseToggle, onOpenToggle } = useToggle()

  return (
    <>
      {/* {isToggle && <TaskCardCreateModal isToggle={isToggle} onCloseModal={onCloseToggle} columnId={props.columnId} />} */}
      <button className={classes["task-card-add-button"]} onClick={onOpenToggle}>
        <div className={classes["task-card-add-button__icon"]}>
          <Image src={AddVioletIcon} alt="" fill />
        </div>
      </button>
    </>
  )
}
