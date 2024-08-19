import TaskDetailCommentForm from "../comment-form/task-detail-comment-form"
import classes from "./task-detail-add-comment.module.css"

interface Props {
  cardId: number
  columnId: number
}

export default function TaskDetailAddComment({ cardId, columnId }: Props) {
  return (
    <div className={classes["comment-form-area"]}>
      <span>댓글</span>
      <TaskDetailCommentForm cardId={cardId} columnId={columnId} />
    </div>
  )
}
