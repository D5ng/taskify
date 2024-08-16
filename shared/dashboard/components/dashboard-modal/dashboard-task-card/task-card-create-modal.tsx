import { useForm, useHashtag, useInput, useSelect, useUpload } from "@common/hooks"
import useTaskCardForm from "@/features/dashboard/dashboard-task-card/hooks/use-task-card-form"
import { Member, UploadResponse } from "@shared/dashboard/types"
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
import { DASHBOARD_TASK_CARD_ERROR_MESSAGE, isNotEmptyValidation } from "@/shared/@common/utils/validation"
import FormControl from "@/shared/@common/components/ui/form-control"
import { TaskCardApiInstance } from "@/shared/dashboard/services"

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

const date = new Date()
const offset = date.getTimezoneOffset() * 60000
const dateOffset = new Date(date.getTime() - offset)

export default function TaskCardCreateModal(props: TaskCardModalProps) {
  const members = useMemberStore.use.members()

  const selectStates = useSelect<Member>(members[0])
  // const hashtagStates = useHashtag()
  const titleStates = useInput((value) => isNotEmptyValidation(value))
  const deadlineStates = useInput((value) => !!value === true)
  const descriptionStates = useInput((value) => isNotEmptyValidation(value))

  const createTaskCardMutation = useCreateTaskCard(props.columnId)

  // const formStates = useTaskCardForm({
  //   columnId: props.columnId,
  //   onCloseModal: props.onCloseModal,
  //   manager: selectStates.selectedItem.userId,
  //   title: titleStates.inputValue,
  //   description: descriptionStates.inputValue,
  //   deadline: dateFormat(deadlineStates.inputValue || defaultDateTime, "dashWithTime"),
  //   hashtags: hashtagStates.hashtags || null,
  //   image: imageStates.uploadedImage || null,
  //   mutation: createTaskCardMutation,
  // })

  const { register, handleSelect, formStates, fieldError, setValue } = useForm<TaskCardDefaultValues>({
    defaultValues: {
      assignee: members[0],
      title: "",
      description: "",
      dueDate: dateOffset.toISOString().slice(0, 16),
      tags: [],
      image: "",
    },
    validate: (values: TaskCardDefaultValues) => {
      const error: { [key in keyof TaskCardDefaultValues]?: string } = {}

      error.title = isNotEmptyValidation(values.title) ? "" : DASHBOARD_TASK_CARD_ERROR_MESSAGE.TITLE_EMPTY
      error.description = isNotEmptyValidation(values.description)
        ? ""
        : DASHBOARD_TASK_CARD_ERROR_MESSAGE.DESCRIPTION_EMPTY
      return error
    },
  })

  const imageStates = useUpload<UploadResponse>({
    onUpload: async (selectedImage: File) => {
      const formData = new FormData()
      formData.append("image", selectedImage)
      return await TaskCardApiInstance.cardImageUpload(props.columnId, formData)
    },
    onSuccess: (result) => setValue("imgae", result.imageUrl),
    onFailed: () => console.log("failed"),
  })

  // const imageStates = useUpload({ columnId: props.columnId, setValue })

  const modalValues = {
    ...formStates,
    title: "할 일 생성",
    onCloseModal: props.onCloseModal,
  }

  console.log(formStates.formValues)

  // onChange

  // handleUpload

  // Input

  return (
    <Modal value={modalValues}>
      <Modal.Backdrop />
      <Modal.Form>
        <Modal.Title />

        <FormControlManager
          onChange={handleSelect("assignee")}
          value={formStates.formValues.assignee}
          hasError={fieldError}
        />
        <FormControl type="modal" id="title" hasError={fieldError}>
          <FormControl.Label isRequired>제목</FormControl.Label>
          <FormControl.Input type="text" placeholder="제목을 입력해 주세요" {...register("title")} />
          <FormControl.ErrorMessage />
        </FormControl>
        <FormControl type="modal" id="description" hasError={fieldError}>
          <FormControl.Label isRequired>설명</FormControl.Label>
          <FormControl.TextArea placeholder="설명을 입력해 주세요" {...register("description")} />
          <FormControl.ErrorMessage />
        </FormControl>
        <FormControl type="modal" id="dueDate" hasError={fieldError}>
          <FormControl.Label>마감일</FormControl.Label>
          <FormControl.Input type="datetime-local" {...register("dueDate")} />
          <FormControl.ErrorMessage />
        </FormControl>
        <FormControlHashtag value={formStates.formValues.tags} onChange={handleSelect("tags")} hasError={fieldError} />
        <FormControl type="modal" id="image" hasError={fieldError}>
          <FormControl.Label>이미지</FormControl.Label>
          <FormControl.Upload isLoading={imageStates.isLoading} previewImageUrl={formStates.formValues.image || ""}>
            <FormControl.Input type="file" onChange={imageStates.handleUpload} />
          </FormControl.Upload>
        </FormControl>
        {/* <FormControl type="modal" id="hashtag" hasError={fieldError}>
          <FormControl.Label>태그</FormControl.Label>
          <FormControl.Input
            type="text"
            // placeholder={`${isDisabled ? "태그는 최대 4개까지만 가능합니다." : "태그를 입력해 주세요"}`}
            // disabled={isDisabled}
            {...register("hashtag")}
          />
          <div className={classes.hashtag}>
            <HashtagList hashtags={props.hashtags} isEdit onDelete={props.handleDeleteHashtag} />
          </div>
          <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
        </FormControl> */}
        {/* <FormControlTitle {...titleStates} />
        <FormControlDescription {...descriptionStates} />
        <FormControlDeadline
          {...deadlineStates}
          inputValue={dateFormat(deadlineStates.inputValue || defaultDateTime, "dashWithTime")}
        /> */}
        {/* <FormControlHashtag {...hashtagStates} /> */}
        {/* <FormControlUpload {...imageStates} /> */}
        <Modal.ButtonLayout>
          <Modal.OutlineButton>취소</Modal.OutlineButton>
          <Modal.PrimaryButton>생성</Modal.PrimaryButton>
        </Modal.ButtonLayout>
      </Modal.Form>
    </Modal>
  )
}

// form-control-deadline => form-control-date-local
