import { dateFormat } from "@common/utils"
import { useToggle } from "@common/hooks"
import { Avatar } from "@common/components/ui"
import { useDeleteComment } from "@shared/dashboard/hooks"
import type { Comment } from "@shared/dashboard/types"
import { TaskDetailUpdateCommentForm } from "@features/dashboard/dashboard-task-detail/components"
import classes from "./task-detail-comment-list-item.module.css"

export default function TaskDetailCommentListItem(props: Comment) {
  const { isToggle, onCloseToggle, onOpenToggle } = useToggle()

  const deleteCommentMutation = useDeleteComment(props.cardId, props.id)
  const handleDeleteComment = async () => await deleteCommentMutation.trigger()

  return (
    <li className={classes["comment-list__item"]}>
      <Avatar image={props.author.profileImageUrl} nickname={props.author.nickname}>
        <Avatar.Image />
      </Avatar>
      <div className={classes["comment-item__contents"]}>
        <div className={classes["comment-item__info"]}>
          <span className={classes["comment-item__nickname"]}>{props.author.nickname}</span>
          <time dateTime={props.updatedAt} className={classes["comment-item__date"]}>
            {dateFormat(props.updatedAt, "periodWithTime")}
          </time>
        </div>
        {isToggle ? (
          <TaskDetailUpdateCommentForm {...props} onCloseToggle={onCloseToggle} />
        ) : (
          <p className={classes["comment-item__comment"]}>{props.content}</p>
        )}
        <div className={classes["comment-item__utils"]}>
          <button onClick={onOpenToggle}>수정</button>
          <button onClick={handleDeleteComment}>삭제</button>
        </div>
      </div>
    </li>
  )
}
