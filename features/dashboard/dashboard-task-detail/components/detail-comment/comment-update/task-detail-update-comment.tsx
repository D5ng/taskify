import type { Comment } from "@shared/dashboard/types"
import { TaskDetailCommentForm } from "@features/dashboard/dashboard-task-detail/components"
import classes from "./task-detail-update-comment.module.css"

interface Props extends Pick<Comment, "content" | "cardId" | "id"> {
  onCloseToggle: () => void
}

export default function TaskDetailUpdateCommentForm(props: Props) {
  return (
    <div className={classes["update-form"]}>
      <TaskDetailCommentForm cardId={props.cardId} columnId={props.id} />
    </div>
  )
}
