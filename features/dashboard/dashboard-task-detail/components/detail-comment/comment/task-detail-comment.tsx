import TaskDetailCommentList from "../comment-list/task-detail-comment-list"
import { TaskCard } from "@shared/dashboard/types"
import TaskDetailCommentListItemSkeleton from "../comment-skeleton/task-detail-comment-skeleton"
import Suspensive from "@/shared/@common/components/suspensive"
import { useFetchComments } from "@/shared/dashboard/hooks"

export default function TaskDetailComment(props: Pick<TaskCard, "assignee" | "updatedAt" | "id">) {
  const commentQuery = useFetchComments(props.id)

  return (
    <Suspensive isLoading={commentQuery.isLoading} fallback={<TaskDetailCommentListItemSkeleton />}>
      <TaskDetailCommentList {...props} />
    </Suspensive>
  )
}
