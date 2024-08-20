import { Modal } from "@common/components/ui"
import { useDashboardDeleteForm } from "@features/dashboard/dashboard-delete/hooks"

interface Props {
  isToggle: boolean
  onCloseModal: () => void
}

export default function DashboardDeleteModal(props: Props) {
  const { onSubmit, isLoading } = useDashboardDeleteForm({ onCloseModal: props.onCloseModal })

  const modalValues = {
    onSubmit,
    isLoading,
    title: "대시보드 삭제",
    onCloseModal: props.onCloseModal,
  }

  return (
    props.isToggle && (
      <Modal value={modalValues}>
        <Modal.Backdrop />
        <Modal.Form size="small">
          <Modal.Title />
          <Modal.Description>
            대시보드를 지우면 복구할 수 없습니다.
            <br />
            그래도 지우시겠습니까?
          </Modal.Description>
          <Modal.ButtonLayout>
            <Modal.OutlineButton>취소</Modal.OutlineButton>
            <Modal.PrimaryButton>삭제</Modal.PrimaryButton>
          </Modal.ButtonLayout>
        </Modal.Form>
      </Modal>
    )
  )
}
