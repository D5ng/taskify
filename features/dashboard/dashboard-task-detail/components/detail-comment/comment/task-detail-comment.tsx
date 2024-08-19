import { Suspensive } from "@common/components"
import type { TaskCard } from "@shared/dashboard/types"
import { useFetchComments } from "@shared/dashboard/hooks"
import { TaskDetailCommentList, TaskDetailCommentSkeleton } from "@features/dashboard/dashboard-task-detail/components"

export default function TaskDetailComment(props: Pick<TaskCard, "assignee" | "updatedAt" | "id">) {
  const commentQuery = useFetchComments(props.id)

  return (
    <Suspensive isLoading={commentQuery.isLoading} fallback={<TaskDetailCommentSkeleton />}>
      <TaskDetailCommentList {...props} />
    </Suspensive>
  )
}
