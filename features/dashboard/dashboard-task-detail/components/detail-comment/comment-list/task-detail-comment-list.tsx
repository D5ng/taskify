import { Loading } from "@common/components/ui"
import { useIntersect } from "@common/hooks"
import { TaskCard } from "@shared/dashboard/types"
import { useFetchComments } from "@shared/dashboard/hooks"
import { TaskDetailCommentListItem, TaskDetailEmptyComment } from "@features/dashboard/dashboard-task-detail/components"
import classes from "./task-detail-comment-list.module.css"

export default function TaskDetailCommentList(props: Pick<TaskCard, "assignee" | "updatedAt" | "id">) {
  const { data, isLoading, isValidating, lastPage, setSize, size } = useFetchComments(props.id)!
  const commentsData = data!

  const onIntersect = () => {
    if (isLoading || isValidating || !lastPage!.cursorId) return
    setSize(size + 1)
  }

  const ref = useIntersect<HTMLDivElement>(onIntersect)

  if (!commentsData.length) return <TaskDetailEmptyComment />

  return (
    <ul className={classes["comment-list"]}>
      {commentsData.map((commentArray) =>
        commentArray.comments.map((comment) => <TaskDetailCommentListItem key={comment.id} {...comment} />)
      )}
      {(isLoading || isValidating) && (
        <div className={classes.loading}>
          <Loading />
        </div>
      )}
      <div ref={ref} style={{ width: "1px", height: "1px", marginTop: "10px" }}></div>
    </ul>
  )
}
