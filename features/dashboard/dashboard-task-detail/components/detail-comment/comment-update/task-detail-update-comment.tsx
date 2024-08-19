import { useInput } from "@common/hooks"
import { isNotEmptyValidation } from "@common/utils"
import { useUpdateComment } from "@shared/dashboard/hooks"
import type { Comment } from "@shared/dashboard/types"
import { TaskDetailCommentForm } from "@features/dashboard/dashboard-task-detail/components"
import classes from "./task-detail-update-comment.module.css"

interface Props extends Pick<Comment, "content" | "cardId" | "id"> {
  onCloseToggle: () => void
}

export default function TaskDetailUpdateCommentForm(props: Props) {
  const updateCommentMutation = useUpdateComment(props.cardId, props.id)
  const inputState = useInput(isNotEmptyValidation, props.content)

  // const onSubmit = useCommentForm({
  //   handleInputReset: inputState.handleInputReset,
  //   callback: async () => {
  //     if (props.content === inputState.inputValue.trim()) return props.onCloseToggle()
  //     await updateCommentMutation.trigger({ content: inputState.inputValue })
  //     props.onCloseToggle()
  //   },
  // })

  const onSubmit = () => {}

  return (
    <div className={classes["update-form"]}>
      <TaskDetailCommentForm
        inputState={inputState}
        isLoading={updateCommentMutation.isMutating}
        onSubmit={onSubmit}
        id="add-comment"
      />
    </div>
  )
}
