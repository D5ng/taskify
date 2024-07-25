import { TaskCard } from "@shared/dashboard/types"
import Avatar from "@/shared/@common/components/ui/avatar"
import classes from "./task-detail-info.module.css"

export default function TaskDetailInfo(props: Pick<TaskCard, "assignee" | "dueDate">) {
  return (
    <div className={classes["task-assignee"]}>
      <div className={classes["task-assignee-layout"]}>
        <span>담당자</span>
        <div className={classes["task-assignee__profile"]}>
          <Avatar image={props.assignee.profileImageUrl} nickname={props.assignee.nickname}>
            <Avatar.Image />
            <Avatar.Name />
          </Avatar>
        </div>
      </div>
      <div className={classes["task-assignee-layout"]}>
        <span>마감일</span>
        <time dateTime={props.dueDate}>{props.dueDate}</time>
      </div>
    </div>
  )
}
