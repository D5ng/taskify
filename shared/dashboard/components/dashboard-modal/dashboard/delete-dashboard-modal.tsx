import { FormEventHandler } from "react"
import { useRouterQuery } from "@common/hooks"
import Modal from "@common/components/ui/modal"
import { useDashboardPageStore, useDeleteDashboard } from "@shared/dashboard/hooks"

interface DeleteDashboardModalProps {
  isToggle: boolean
  onCloseModal: () => void
}

export default function DeleteDashboardModal(props: DeleteDashboardModalProps) {
  const dashboardId = +useRouterQuery("id")
  const currentPage = useDashboardPageStore.use.currentPage()
  const deleteDashboardMutation = useDeleteDashboard(dashboardId, currentPage)

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    deleteDashboardMutation.trigger()
    props.onCloseModal()
  }

  const modalValues = {
    onSubmit,
    isLoading: deleteDashboardMutation.isMutating,
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
