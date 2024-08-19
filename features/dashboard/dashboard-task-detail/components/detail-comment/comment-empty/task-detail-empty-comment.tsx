import Image from "next/image"
import classes from "./task-detail-empty-comment.module.css"

export default function TaskDetailEmptyComment() {
  return (
    <div className={classes["empty-comment"]}>
      <div className={classes["empty-comment-icon"]}>
        <Image src="/images/icons/comment-icon.svg" alt="댓글 아이콘" fill />
      </div>
      <p className={classes["empty-comment-description"]}>
        아직 댓글이 없어요. <br /> 가장 먼저 댓글을 남겨보세요.
      </p>
    </div>
  )
}
