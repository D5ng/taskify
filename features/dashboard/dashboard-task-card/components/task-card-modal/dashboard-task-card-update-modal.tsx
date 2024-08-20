import { Modal } from "@common/components/ui"
import { useForm } from "@common/hooks"
import { TaskCard, TaskCardDefaultValues } from "@shared/dashboard/types"
import { useMemberStore, useUpdateTaskCard } from "@shared/dashboard/hooks"
import { TaskCardUpdateLogic } from "@features/dashboard/dashboard-task-card/logic"
import {
  FormControlManager,
  FormControlHashtag,
  FormControlTitle,
  FormControlDescription,
  FormControlDeadline,
  FormControlUpload,
} from "@features/dashboard/dashboard-task-card/components"
import { useTaskCardForm } from "@features/dashboard/dashboard-task-card/hooks"

interface TaskCardModalProps extends TaskCard {
  onCloseModal: () => void
  columnId: number
}

export default function DashboardTaskCardUpdateModal(props: TaskCardModalProps) {
  const members = useMemberStore.use.members()
  const updateTaskCardMutation = useUpdateTaskCard(props.columnId, props.id)

  const { register, handleSelect, formStates, fieldError, setValue, handleSetError, handleSubmit } =
    useForm<TaskCardDefaultValues>({
      defaultValues: TaskCardUpdateLogic.defaultValues(props),
      validate: TaskCardUpdateLogic.validate,
    })

  const onSubmit = useTaskCardForm({
    columnId: props.columnId,
    onCloseModal: props.onCloseModal,
    setError: handleSetError,
    mutationFn: async (data) => await updateTaskCardMutation.trigger(data),
  })

  const modalValues = {
    onSubmit: handleSubmit(onSubmit),
    isDisabled: formStates.hasFormError,
    isLoading: formStates.isSubmitting,
    title: "할 일 수정",
    onCloseModal: props.onCloseModal,
  }

  return (
    <Modal value={modalValues}>
      <Modal.Backdrop />
      <Modal.Form>
        <Modal.Title />
        <FormControlManager onChange={handleSelect("assignee")} hasError={fieldError} members={members} />
        <FormControlTitle register={register} hasError={fieldError} />
        <FormControlDescription register={register} hasError={fieldError} />
        <FormControlDeadline register={register} hasError={fieldError} />
        <FormControlHashtag
          value={formStates.formValues.tags}
          onChange={handleSelect("tags")}
          hasError={fieldError}
          handleSetError={handleSetError}
        />
        <FormControlUpload
          hasError={fieldError}
          previewImageUrl={formStates.formValues.imageUrl || ""}
          columnId={props.columnId}
          setValue={setValue}
        />
        <Modal.ButtonLayout>
          <Modal.OutlineButton>취소</Modal.OutlineButton>
          <Modal.PrimaryButton>수정</Modal.PrimaryButton>
        </Modal.ButtonLayout>
      </Modal.Form>
    </Modal>
  )
}
