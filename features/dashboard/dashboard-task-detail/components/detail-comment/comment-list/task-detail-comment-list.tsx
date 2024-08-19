import { TaskCard } from "@shared/dashboard/types"
import { useFetchComments } from "@shared/dashboard/hooks"
import { TaskDetailCommentListItem, TaskDetailEmptyComment } from "@features/dashboard/dashboard-task-detail/components"
import classes from "./task-detail-comment-list.module.css"

export default function TaskDetailCommentList(props: Pick<TaskCard, "assignee" | "updatedAt" | "id">) {
  const commentQuery = useFetchComments(props.id)

  if (!commentQuery.data!.comments.length) return <TaskDetailEmptyComment />

  return (
    <ul className={classes["comment-list"]}>
      {commentQuery.data!.comments.map((comment) => (
        <TaskDetailCommentListItem key={comment.id} {...comment} />
      ))}
    </ul>
  )
}
