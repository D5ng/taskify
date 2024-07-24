import Modal from "@/shared/@common/components/ui/modal"
import { useDeleteDashboardColumn } from "@/shared/dashboard/hooks"
import { DashboardColumn } from "@shared/dashboard/types"
import { FormEventHandler } from "react"

interface Props extends Pick<DashboardColumn, "id"> {
  onCloseModal: () => void
}

export default function DashboardColumnDeleteModal({ onCloseModal, id }: Props) {
  const deleteColumnMutation = useDeleteDashboardColumn(id)

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    await deleteColumnMutation.trigger()
    onCloseModal()
  }

  const modalValues = {
    onSubmit,
    isLoading: deleteColumnMutation.isMutating,
    title: "컬럼 삭제",
    onCloseModal,
  }

  return (
    <Modal value={modalValues}>
      <Modal.Backdrop />
      <Modal.Form size="small">
        <Modal.Title />
        <Modal.Description>
          컬럼의 모든 카드가 삭제됩니다.
          <br />
          그래도 삭제하시겠습니까?
        </Modal.Description>
        <Modal.ButtonLayout>
          <Modal.OutlineButton>취소</Modal.OutlineButton>
          <Modal.PrimaryButton>삭제</Modal.PrimaryButton>
        </Modal.ButtonLayout>
      </Modal.Form>
    </Modal>
  )
}
