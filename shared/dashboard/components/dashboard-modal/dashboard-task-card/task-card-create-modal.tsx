import {
  FormControlDeadline,
  FormControlManager,
  FormControlDescription,
  FormControlHashtag,
  FormControlTitle,
  FormControlUpload,
} from "@common/components"
import { Modal } from "@common/components/ui"
import { useForm } from "@common/hooks"
import { Member } from "@shared/dashboard/types"
import { useMemberStore } from "@shared/dashboard/hooks"
import { TaskCardLogic } from "@shared/dashboard/logic"

interface TaskCardModalProps {
  onCloseModal: () => void
  columnId: number
}

export interface TaskCardDefaultValues {
  assignee: Member
  title: string
  description: string
  dueDate: string
  tags: string[]
  image: string | null
}

export default function TaskCardCreateModal(props: TaskCardModalProps) {
  const members = useMemberStore.use.members()

  const { register, handleSelect, formStates, fieldError, setValue } = useForm<TaskCardDefaultValues>({
    defaultValues: TaskCardLogic.defaultValues(members[0]),
    validate: TaskCardLogic.validate,
  })

  const modalValues = {
    ...formStates,
    title: "할 일 생성",
    onCloseModal: props.onCloseModal,
  }

  console.log(formStates.formValues.image)

  return (
    <Modal value={modalValues}>
      <Modal.Backdrop />
      <Modal.Form>
        <Modal.Title />
        <FormControlManager
          onChange={handleSelect("assignee")}
          value={formStates.formValues.assignee}
          hasError={fieldError}
          members={members}
        />
        <FormControlTitle register={register} hasError={fieldError} />
        <FormControlDescription register={register} hasError={fieldError} />
        <FormControlDeadline register={register} hasError={fieldError} />
        <FormControlHashtag value={formStates.formValues.tags} onChange={handleSelect("tags")} hasError={fieldError} />
        <FormControlUpload
          hasError={fieldError}
          previewImageUrl={formStates.formValues.image || ""}
          columnId={props.columnId}
          setValue={setValue}
        />
        <Modal.ButtonLayout>
          <Modal.OutlineButton>취소</Modal.OutlineButton>
          <Modal.PrimaryButton>생성</Modal.PrimaryButton>
        </Modal.ButtonLayout>
      </Modal.Form>
    </Modal>
  )
}

// form-control-deadline => form-control-date-local
