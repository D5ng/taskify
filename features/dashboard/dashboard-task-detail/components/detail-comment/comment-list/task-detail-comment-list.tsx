import TaskDetailCommentListItem from "../comment-list-item/task-detail-comment-list-item"

import TaskDetailEmptyComment from "../comment-empty/task-detail-empty-comment"
import classes from "./task-detail-comment-list.module.css"
import { TaskCard } from "@/shared/dashboard/types"
import { useFetchComments } from "@/shared/dashboard/hooks"

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
