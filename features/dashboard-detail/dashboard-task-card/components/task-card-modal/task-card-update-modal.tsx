// import Modal from "@/shared/common/components/ui/modal-compound/modal"
// import useInput from "@/hooks/use-input"
// import useUpload from "@/hooks/use-upload"
// import useSelect from "@/hooks/use-select"

// import useTaskCardForm from "@/features/dashboard/dashboard-task-card/hooks/use-task-card-form"
// import { Member } from "@shared/common/types"

// import useMemberStore from "@/store/member.store"
// import { dateFormat, defaultDateTime } from "@/utils/moment.utils"

// import { useUpdateTaskCard } from "@features/dashboard/dashboard-task-card/hooks"
// import { isNotEmptyValidation } from "@/utils/validation.utils"

// import { TaskCard } from "@features/dashboard/dashboard-task-card/types"
// import { useHashtag } from "@features/dashboard/dashboard-task-card/hooks"

// import {
//   FormControlManager,
//   FormControlHashtag,
//   FormControlTitle,
//   FormControlDescription,
//   FormControlDeadline,
//   FormControlUpload,
// } from "@/shared/common/components/form-control"

// interface TaskCardModalProps extends TaskCard {
//   onCloseModal: () => void
//   columnId: number
// }

// export default function TaskCardUpdateModal(props: TaskCardModalProps) {
//   const members = useMemberStore.use.members()
//   const imageStates = useUpload(props.columnId, props.imageUrl)
//   const selectStates = useSelect<Member>(members[0])
//   const hashtagStates = useHashtag(props.tags)
//   const titleStates = useInput(isNotEmptyValidation, props.title)
//   const deadlineStates = useInput((value) => !!value, props.dueDate)
//   const descriptionStates = useInput(isNotEmptyValidation, props.description)

//   const updateTaskCardMutation = useUpdateTaskCard(props.columnId, props.id)

//   const formStates = useTaskCardForm({
//     columnId: props.columnId,
//     onCloseModal: props.onCloseModal,
//     manager: selectStates.selectedItem.userId,
//     title: titleStates.inputValue,
//     description: descriptionStates.inputValue,
//     deadline: dateFormat(deadlineStates.inputValue || defaultDateTime, "dashWithTime"),
//     hashtags: hashtagStates.hashtags || null,
//     image: imageStates.uploadedImage || null,
//     mutation: updateTaskCardMutation,
//   })

//   const modalValues = {
//     ...formStates,
//     title: "할 일 수정",
//     onCloseModal: props.onCloseModal,
//   }

//   return (
//     <Modal value={modalValues}>
//       <Modal.Backdrop />
//       <Modal.Form>
//         <Modal.Title />
//         <FormControlManager
//           handleSelectedItem={selectStates.handleSelectedItem}
//           inputValue={selectStates.selectedItem.nickname}
//         />
//         <FormControlTitle {...titleStates} />
//         <FormControlDescription {...descriptionStates} />
//         <FormControlDeadline
//           {...deadlineStates}
//           inputValue={dateFormat(deadlineStates.inputValue || defaultDateTime, "dashWithTime")}
//         />
//         <FormControlHashtag {...hashtagStates} />
//         <FormControlUpload {...imageStates} />
//         <Modal.ButtonLayout>
//           <Modal.OutlineButton>취소</Modal.OutlineButton>
//           <Modal.PrimaryButton>수정</Modal.PrimaryButton>
//         </Modal.ButtonLayout>
//       </Modal.Form>
//     </Modal>
//   )
// }
