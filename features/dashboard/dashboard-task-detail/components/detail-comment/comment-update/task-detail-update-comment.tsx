import type { Comment } from "@shared/dashboard/types"
import { TaskDetailCommentForm } from "@features/dashboard/dashboard-task-detail/components"
import { useCommentUpdateForm } from "@features/dashboard/dashboard-task-detail/hooks"
import classes from "./task-detail-update-comment.module.css"

interface Props extends Pick<Comment, "content" | "cardId" | "id"> {
  onCloseToggle: () => void
}

export default function TaskDetailUpdateCommentForm(props: Props) {
  const onSubmit = useCommentUpdateForm({
    cardId: props.cardId,
    commentId: props.id,
    onCloseToggle: props.onCloseToggle,
  })
  return (
    <div className={classes["update-form"]}>
      <TaskDetailCommentForm cardId={props.cardId} columnId={props.id} content={props.content} onSubmit={onSubmit} />
    </div>
  )
}
