// import { useInput, useUpload, useSelect } from "@/hooks"
// import Modal from "@/shared/common/components/ui/modal-compound/modal"
// import useTaskCardForm from "@/features/dashboard/dashboard-task-card/hooks/use-task-card-form"
// import { Member } from "@shared/common/types"
// import { useMemberStore } from "@/store"
// import { dateFormat, defaultDateTime } from "@/utils/moment.utils"
// import { useCreateTaskCard } from "@features/dashboard/dashboard-task-card/hooks"

// import {
//   FormControlDeadline,
//   FormControlManager,
//   FormControlDescription,
//   FormControlHashtag,
//   FormControlTitle,
//   FormControlUpload,
// } from "@/shared/common/components/form-control"
// import { useHashtag } from "@features/dashboard/dashboard-task-card/hooks"

// interface TaskCardModalProps {
//   isToggle: boolean
//   onCloseModal: () => void
//   columnId: number
// }

// export default function TaskCardCreateModal(props: TaskCardModalProps) {
//   const members = useMemberStore.use.members()
//   const imageStates = useUpload(props.columnId)
//   const selectStates = useSelect<Member>(members[0])
//   const hashtagStates = useHashtag()
//   const titleStates = useInput((value) => value.trim().length !== 0)
//   const deadlineStates = useInput((value) => !!value === true)
//   const descriptionStates = useInput((value) => value.trim().length !== 0)

//   const createTaskCardMutation = useCreateTaskCard(props.columnId)

//   const formStates = useTaskCardForm({
//     columnId: props.columnId,
//     onCloseModal: props.onCloseModal,
//     manager: selectStates.selectedItem.userId,
//     title: titleStates.inputValue,
//     description: descriptionStates.inputValue,
//     deadline: dateFormat(deadlineStates.inputValue || defaultDateTime, "dashWithTime"),
//     hashtags: hashtagStates.hashtags || null,
//     image: imageStates.uploadedImage || null,
//     mutation: createTaskCardMutation,
//   })

//   const modalValues = {
//     ...formStates,
//     title: "할 일 생성",
//     onCloseModal: props.onCloseModal,
//   }

//   return (
//     props.isToggle && (
//       <Modal value={modalValues}>
//         <Modal.Backdrop />
//         <Modal.Form>
//           <Modal.Title />
//           <FormControlManager
//             handleSelectedItem={selectStates.handleSelectedItem}
//             inputValue={selectStates.selectedItem.nickname}
//           />

//           <FormControlTitle {...titleStates} />
//           <FormControlDescription {...descriptionStates} />
//           <FormControlDeadline
//             {...deadlineStates}
//             inputValue={dateFormat(deadlineStates.inputValue || defaultDateTime, "dashWithTime")}
//           />
//           <FormControlHashtag {...hashtagStates} />
//           <FormControlUpload {...imageStates} />
//           <Modal.ButtonLayout>
//             <Modal.OutlineButton>취소</Modal.OutlineButton>
//             <Modal.PrimaryButton>생성</Modal.PrimaryButton>
//           </Modal.ButtonLayout>
//         </Modal.Form>
//       </Modal>
//     )
//   )
// }

// // form-control-deadline => form-control-date-local
