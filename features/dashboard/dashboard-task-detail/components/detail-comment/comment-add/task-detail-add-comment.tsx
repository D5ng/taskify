import { TaskDetailCommentForm } from "@features/dashboard/dashboard-task-detail/components"
import { useCommentCreateForm } from "@features/dashboard/dashboard-task-detail/hooks"
import classes from "./task-detail-add-comment.module.css"

interface Props {
  cardId: number
  columnId: number
}

export default function TaskDetailAddComment({ cardId, columnId }: Props) {
  const onSubmit = useCommentCreateForm({ cardId, columnId })

  return (
    <div className={classes["comment-form-area"]}>
      <span>댓글</span>
      <TaskDetailCommentForm cardId={cardId} columnId={columnId} onSubmit={onSubmit} />
    </div>
  )
}
