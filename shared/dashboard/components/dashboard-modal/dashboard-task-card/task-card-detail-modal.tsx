import { Modal, Dropdown } from "@common/components/ui"
import {
  TaskDetailChips,
  TaskDetailContents,
  TaskDetailAddComment,
  TaskDetailComment,
  TaskDetailInfo,
} from "@features/dashboard/dashboard-task-detail/components"
import { TaskCard } from "@shared/dashboard/types"
import classes from "./task-card-detail-modal.module.css"

interface TaskCardDetailModalProps extends TaskCard {
  onCloseModal: () => void
  onUpdateModal: () => void
}

export default function TaskCardDetailModal(props: TaskCardDetailModalProps) {
  const modalValues = {
    title: props.title,
    onCloseModal: props.onCloseModal,
  }

  return (
    <Modal value={modalValues}>
      <Modal.Backdrop />
      <Modal.Contents>
        <Modal.Title />
        <Modal.Utils>
          <Dropdown>
            <Dropdown.Trigger>
              <Modal.Kebab />
            </Dropdown.Trigger>
            <Dropdown.Menu>
              <Dropdown.MenuItem onClick={props.onUpdateModal}>수정하기</Dropdown.MenuItem>
              <Dropdown.MenuItem onClick={() => {}}>삭제하기</Dropdown.MenuItem>
            </Dropdown.Menu>
          </Dropdown>
          <Modal.Close />
        </Modal.Utils>

        <div className={classes.layout}>
          <div className={classes["contents-wrapper"]}>
            <TaskDetailChips tags={props.tags} />
            <TaskDetailContents description={props.description} imageUrl={props.imageUrl} />
            <TaskDetailAddComment cardId={props.id} columnId={props.columnId} />
            <TaskDetailComment assignee={props.assignee} updatedAt={props.updatedAt} id={props.id} />
          </div>
          <TaskDetailInfo assignee={props.assignee} dueDate={props.dueDate} />
        </div>
      </Modal.Contents>
    </Modal>
  )
}
