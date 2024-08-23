import Image from "next/image"
import CalendarIcon from "@/public/images/icons/calendar-icon.svg"
import { HashtagList } from "@common/components"
import { Avatar } from "@common/components/ui"
import { useToggle } from "@common/hooks"
import { dateFormat } from "@common/utils/date"
import type { TaskCard } from "@shared/dashboard/types"
import { DashboardTaskCardUpdateModal } from "@features/dashboard/dashboard-task-card/components"
import { TaskDetailModal } from "@features/dashboard/dashboard-task-detail/components"
import classes from "./dashboard-task-card-list-item.module.css"

interface Props extends TaskCard {
  columnTitle: string
}

export default function DashboardTaskCardListItem(props: Props) {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()
  const {
    isToggle: isOpenUpdateModal,
    onOpenToggle: onUpdateOpenModal,
    onCloseToggle: onUpdateCloseModal,
  } = useToggle()

  const handleUpdateCard = () => {
    onCloseToggle()
    onUpdateOpenModal()
  }

  return (
    <li>
      {isOpenUpdateModal && <DashboardTaskCardUpdateModal {...props} onCloseModal={onUpdateCloseModal} />}
      {isToggle && <TaskDetailModal onCloseModal={onCloseToggle} onUpdateModal={handleUpdateCard} {...props} />}
      <div className={classes["task-card-layout"]} onClick={onOpenToggle}>
        {props.imageUrl && (
          <div className={classes["task-card-thumbnail"]}>
            <Image src={props.imageUrl} alt="" fill />
          </div>
        )}
        <h4 className={classes["task-card-title"]}>{props.title}</h4>

        <div className={classes["task-card-hashtag-list"]}>
          <HashtagList hashtags={props.tags} />
        </div>
        <div className={classes["task-card-info"]}>
          <div className={classes["task-card-info-date-layout"]}>
            <div className={classes["task-card-info-image"]}>
              <Image src={CalendarIcon} alt="" fill />
            </div>
            <time className={classes["task-card-info-date"]}>{dateFormat(props.dueDate, "period")}</time>
          </div>
          <Avatar nickname={props.assignee.nickname} image={props.assignee.profileImageUrl}>
            <Avatar.Image type="task" />
          </Avatar>
        </div>
      </div>
    </li>
  )
}
