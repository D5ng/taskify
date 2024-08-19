import useTaskCardForm from "@/features/dashboard/dashboard-task-card/hooks/use-task-card-form"

import {
  FormControlManager,
  FormControlHashtag,
  FormControlTitle,
  FormControlDescription,
  FormControlDeadline,
  FormControlUpload,
} from "@common/components/form-control"
import { Modal } from "@/shared/@common/components/ui"
import { useForm, useHashtag, useInput, useSelect, useUpload } from "@/shared/@common/hooks"
import { Member, TaskCard, TaskCardDefaultValues } from "@/shared/dashboard/types"
import { useMemberStore, useUpdateTaskCard } from "@/shared/dashboard/hooks"
import { dateFormat, defaultDateTime } from "@/shared/@common/utils/date"
import { isNotEmptyValidation } from "@/shared/@common/utils/validation"

interface TaskCardModalProps extends TaskCard {
  onCloseModal: () => void
  columnId: number
}

export default function TaskCardUpdateModal(props: TaskCardModalProps) {
  const members = useMemberStore.use.members()
  // const imageStates = useUpload(props.columnId, props.imageUrl)
  // const selectStates = useSelect<Member>(members[0])
  // const hashtagStates = useHashtag(props.tags)
  // const titleStates = useInput(isNotEmptyValidation, props.title)
  // const deadlineStates = useInput((value) => !!value, props.dueDate)
  // const descriptionStates = useInput(isNotEmptyValidation, props.description)

  const updateTaskCardMutation = useUpdateTaskCard(props.columnId, props.id)

  const { register, handleSelect, formStates, fieldError, setValue, handleSetError, handleSubmit } =
    useForm<TaskCardDefaultValues>({
      defaultValues: {
        error: "",
        assigneeUserId: props.assignee.id,
        title: props.title,
        description: props.description,
        dueDate: props.dueDate,
        tags: props.tags,
        imageUrl: props.imageUrl,
      },
      validate: TaskCardLogic.validate,
    })

  // const formStates = useTaskCardForm({
  //   columnId: props.columnId,
  //   onCloseModal: props.onCloseModal,
  //   manager: selectStates.selectedItem.userId,
  //   title: titleStates.inputValue,
  //   description: descriptionStates.inputValue,
  //   deadline: dateFormat(deadlineStates.inputValue || defaultDateTime, "dashWithTime"),
  //   hashtags: hashtagStates.hashtags || null,
  //   image: imageStates.uploadedImage || null,
  //   mutation: updateTaskCardMutation,
  // })

  const modalValues = {
    ...formStates,
    title: "할 일 수정",
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
          <Modal.PrimaryButton>수정</Modal.PrimaryButton>
        </Modal.ButtonLayout>
      </Modal.Form>
    </Modal>
  )
}
