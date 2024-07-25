import Image from "next/image"
import CalendarIcon from "@/public/images/icons/calendar-icon.svg"
import { useToggle } from "@common/hooks"
import { TaskCard } from "@shared/dashboard/types"
import { dateFormat } from "@common/utils/date"
import { HashtagList } from "@common/components/hashtag"
import Avatar from "@/shared/@common/components/ui/avatar"
import { TaskCardDetailModal, TaskCardUpdateModal } from "@shared/dashboard/components/dashboard-modal"
import classes from "./dashboard-task-card-list-item.module.css"

export default function DashboardTaskCardListItem(props: TaskCard) {
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
      {isOpenUpdateModal && <TaskCardUpdateModal {...props} onCloseModal={onUpdateCloseModal} />}
      {isToggle && <TaskCardDetailModal onCloseModal={onCloseToggle} onUpdateModal={handleUpdateCard} {...props} />}
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
