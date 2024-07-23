// import Modal from "@/shared/common/components/ui/modal-compound/modal"
// import {
//   TaskDetailChips,
//   TaskDetailContents,
//   TaskDetailAddComment,
//   TaskDetailComment,
//   TaskDetailInfo,
// } from "@/features/dashboard/dashboard-task-detail/components"
// import classes from "./task-card-detail-modal.module.css"
// import { TaskCard } from "@features/dashboard/dashboard-task-card/types"

// interface TaskCardDetailModalProps extends TaskCard {
//   onCloseModal: () => void
//   onUpdateModal: () => void
// }

// export default function TaskCardDetailModal(props: TaskCardDetailModalProps) {
//   const modalValues = {
//     title: props.title,
//     onCloseModal: props.onCloseModal,
//   }

//   return (
//     <Modal value={modalValues}>
//       <Modal.Backdrop />
//       <Modal.Layout>
//         <Modal.Header
//           renderKebab={<Modal.Kebab {...props} />}
//           renderClose={<Modal.Close />}
//           renderTitle={<Modal.Title />}
//         />
//         <div className={classes.layout}>
//           <div className={classes["contents-wrapper"]}>
//             <TaskDetailChips tags={props.tags} />
//             <TaskDetailContents description={props.description} imageUrl={props.imageUrl} />
//             <TaskDetailAddComment cardId={props.id} columnId={props.columnId} />
//             <TaskDetailComment assignee={props.assignee} updatedAt={props.updatedAt} id={props.id} />
//           </div>
//           <TaskDetailInfo assignee={props.assignee} dueDate={props.dueDate} />
//         </div>
//       </Modal.Layout>
//     </Modal>
//   )
// }
