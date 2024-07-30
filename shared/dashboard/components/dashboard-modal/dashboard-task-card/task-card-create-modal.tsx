import { useHashtag, useInput, useSelect, useUpload } from "@common/hooks"
import useTaskCardForm from "@/features/dashboard/dashboard-task-card/hooks/use-task-card-form"
import { Member } from "@shared/dashboard/types"
import { dateFormat, defaultDateTime } from "@common/utils/date"

import {
  FormControlDeadline,
  FormControlManager,
  FormControlDescription,
  FormControlHashtag,
  FormControlTitle,
  FormControlUpload,
} from "@common/components/form-control"
import Modal from "@/shared/@common/components/ui/modal"
import { useCreateTaskCard, useMemberStore } from "@/shared/dashboard/hooks"
import { isNotEmptyValidation } from "@/shared/@common/utils/validation"

interface TaskCardModalProps {
  isToggle: boolean
  onCloseModal: () => void
  columnId: number
}

export default function TaskCardCreateModal(props: TaskCardModalProps) {
  const members = useMemberStore.use.members()
  const imageStates = useUpload(props.columnId)
  const selectStates = useSelect<Member>(members[0])
  const hashtagStates = useHashtag()
  const titleStates = useInput((value) => isNotEmptyValidation(value))
  const deadlineStates = useInput((value) => !!value === true)
  const descriptionStates = useInput((value) => isNotEmptyValidation(value))

  const createTaskCardMutation = useCreateTaskCard(props.columnId)

  const formStates = useTaskCardForm({
    columnId: props.columnId,
    onCloseModal: props.onCloseModal,
    manager: selectStates.selectedItem.userId,
    title: titleStates.inputValue,
    description: descriptionStates.inputValue,
    deadline: dateFormat(deadlineStates.inputValue || defaultDateTime, "dashWithTime"),
    hashtags: hashtagStates.hashtags || null,
    image: imageStates.uploadedImage || null,
    mutation: createTaskCardMutation,
  })

  const modalValues = {
    ...formStates,
    title: "할 일 생성",
    onCloseModal: props.onCloseModal,
  }

  return (
    <Modal value={modalValues}>
      <Modal.Backdrop />
      <Modal.Form>
        <Modal.Title />
        <FormControlManager handleClick={selectStates.onSelectedItem} inputValue={selectStates.selectedItem} />

        <FormControlTitle {...titleStates} />
        <FormControlDescription {...descriptionStates} />
        <FormControlDeadline
          {...deadlineStates}
          inputValue={dateFormat(deadlineStates.inputValue || defaultDateTime, "dashWithTime")}
        />
        <FormControlHashtag {...hashtagStates} />
        <FormControlUpload {...imageStates} />
        <Modal.ButtonLayout>
          <Modal.OutlineButton>취소</Modal.OutlineButton>
          <Modal.PrimaryButton>생성</Modal.PrimaryButton>
        </Modal.ButtonLayout>
      </Modal.Form>
    </Modal>
  )
}

// form-control-deadline => form-control-date-local
