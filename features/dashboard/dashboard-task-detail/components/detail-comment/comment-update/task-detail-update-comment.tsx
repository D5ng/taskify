import { TaskDetailCommentForm } from "@/features/dashboard/dashboard-task-detail/components"
import classes from "./task-detail-update-comment.module.css"
import { useInput } from "@/shared/@common/hooks"
import { useUpdateComment } from "@/shared/dashboard/hooks"
import { isNotEmptyValidation } from "@/shared/@common/utils/validation"
import { Comment } from "@/shared/dashboard/types"

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
