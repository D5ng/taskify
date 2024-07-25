import React from "react"
// import useCommentForm from "@/features/dashboard/hooks/dashboard-task-card/use-comment-form"
import TaskDetailCommentForm from "../comment-form/task-detail-comment-form"
import classes from "./task-detail-add-comment.module.css"
import { useInput, useRouterQuery } from "@/shared/@common/hooks"
import { isNotEmptyValidation } from "@/shared/@common/utils/validation"
import { useCreateComment } from "@/shared/dashboard/hooks"

interface Props {
  cardId: number
  columnId: number
}

export default function TaskDetailAddComment({ cardId, columnId }: Props) {
  const createCommentMutation = useCreateComment(cardId)
  const dashboardId = +useRouterQuery("id")
  const inputState = useInput(isNotEmptyValidation)

  // const onSubmit = useCommentForm({
  //   handleInputReset: inputState.handleInputReset,
  //   callback: async () => {
  //     if (!inputState.inputValue.trim().length) return

  //     await createCommentMutation.trigger({
  //       content: inputState.inputValue,
  //       cardId,
  //       columnId,
  //       dashboardId,
  //     })
  //   },
  // })

  const onSubmit = () => {}

  return (
    <div className={classes["comment-form"]}>
      <span>댓글</span>
      <TaskDetailCommentForm
        inputState={inputState}
        isLoading={createCommentMutation.isMutating}
        onSubmit={onSubmit}
        id="add-comment"
      />
    </div>
  )
}
