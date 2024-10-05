import { Modal } from "@common/components/ui"
import { useForm } from "@common/hooks"
import { TaskCardDefaultValues } from "@shared/dashboard/types"
import { useMemberStore, useCreateTaskCard } from "@shared/dashboard/hooks"
import {
  FormControlDeadline,
  FormControlManager,
  FormControlDescription,
  FormControlHashtag,
  FormControlTitle,
  FormControlUpload,
} from "@features/dashboard/dashboard-task-card/components"
import { useTaskCardForm } from "@features/dashboard/dashboard-task-card/hooks"
import { TaskCardCreateLogic } from "@features/dashboard/dashboard-task-card/logic"

interface TaskCardModalProps {
  onCloseModal: () => void
  columnId: number
}

export default function DashboardTaskCardCreateModal(props: TaskCardModalProps) {
  const members = useMemberStore.use.members()
  const createTaskCardMutation = useCreateTaskCard(props.columnId)

  console.log(members)

  const { register, handleSelect, formStates, fieldError, setValue, handleSetError, handleSubmit } =
    useForm<TaskCardDefaultValues>({
      defaultValues: TaskCardCreateLogic.defaultValues(members[0].userId, props.columnId),
      validate: TaskCardCreateLogic.validate,
    })

  const onSubmit = useTaskCardForm({
    columnId: props.columnId,
    onCloseModal: props.onCloseModal,
    setError: handleSetError,
    mutationFn: async (data) => await createTaskCardMutation.trigger(data),
  })

  const modalValues = {
    onSubmit: handleSubmit(onSubmit),
    isLoading: formStates.isSubmitting,
    isDisabled: formStates.hasFormError,
    title: "할 일 생성",
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
          <Modal.PrimaryButton>생성</Modal.PrimaryButton>
        </Modal.ButtonLayout>
        {formStates.formValues.error && <Modal.ErrorMessage>{formStates.formValues.error}</Modal.ErrorMessage>}
      </Modal.Form>
    </Modal>
  )
}
