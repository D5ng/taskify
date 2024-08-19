import { KeyboardEventHandler } from "react"
import { FormControlComment } from "@common/components"
import { Button } from "@common/components/ui"
import { useComposing } from "@common/hooks"
import { useForm } from "@shared/@common/hooks"
import type { CommentData } from "@shared/dashboard/types"
import { TaskCardCommentLogic } from "@shared/dashboard/logic"
import { useTaskCardCommentForm } from "@shared/dashboard/hooks"
import classes from "./task-detail-comment-form.module.css"

interface Props {
  cardId: number
  columnId: number
}

export default function TaskDetailCommentForm({ cardId, columnId }: Props) {
  const { isComposing, handleCompositionEnd, handleCompositionStart } = useComposing()
  const { formStates, register, fieldError, handleSubmit } = useForm<CommentData>({
    defaultValues: TaskCardCommentLogic.defaultValues,
    validate: TaskCardCommentLogic.validate,
    options: { isFormReset: true },
  })

  const onSubmit = useTaskCardCommentForm({ cardId, columnId })

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    if (event.key === "Enter" && !event.shiftKey && !isComposing) {
      event.preventDefault()
      handleSubmit(onSubmit)(event)
    }
  }

  return (
    <form
      className={classes["comment-form"]}
      onSubmit={handleSubmit(onSubmit)}
      onCompositionStart={handleCompositionStart}
      onCompositionEnd={handleCompositionEnd}
    >
      <FormControlComment hasError={fieldError} register={register} onKeyDown={handleKeyDown} />
      <div className={classes["comment-button"]}>
        <Button
          buttonStyle="secondary"
          size="small"
          type="submit"
          isLoading={formStates.isSubmitting}
          isDisabled={formStates.hasFormError}
        >
          입력
        </Button>
      </div>
    </form>
  )
}
