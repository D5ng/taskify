// import useCommentForm from "@/features/dashboard/hooks/dashboard-task-card/use-comment-form"
import { useInput, useRouterQuery } from "@common/hooks"
import { isNotEmptyValidation } from "@common/utils/validation"
import { useCreateComment } from "@shared/dashboard/hooks"
import { TaskDetailCommentForm } from "@features/dashboard/dashboard-task-detail/components"
import classes from "./task-detail-add-comment.module.css"

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
