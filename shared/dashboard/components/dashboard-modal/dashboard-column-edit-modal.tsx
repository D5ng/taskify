import React from "react"
import Modal from "@common/components/ui/modal"
import { isNotEmptyValidation } from "@common/utils/validation"
import { useInput } from "@common/hooks"
import { DashboardColumn } from "@shared/dashboard/types"
import { useUpdateDashboardColumn } from "@shared/dashboard/hooks"
import { useEditDashboardColumnForm } from "@/features/dashboard-detail/dashboard-column/hooks"
import FormControl from "@/shared/@common/components/ui/form-control"

interface Props extends Pick<DashboardColumn, "id" | "title"> {
  onCloseModal: () => void
  onNextModal: () => void
}

export default function DashboardColumnEditModal({ onNextModal, onCloseModal, id, title }: Props) {
  const inputStates = useInput(isNotEmptyValidation, title)

  const updateColumnMutation = useUpdateDashboardColumn(id)

  const handleDeleteClick = () => {
    onCloseModal()
    onNextModal()
  }

  const formStates = useEditDashboardColumnForm({
    value: inputStates.inputValue,
    mutation: updateColumnMutation,
    onCloseModal,
  })

  const modalValues = {
    ...formStates,
    title: "컬럼 관리",
    onCloseModal,
  }

  return (
    <Modal value={modalValues}>
      <Modal.Backdrop />
      <Modal.Form>
        <Modal.Title />
        <FormControl value={{ ...inputStates, type: "modal", id: "edit-dashboard-column" }}>
          <FormControl.Label>이름</FormControl.Label>
          <FormControl.Input type="text" placeholder="이메일을 입력해주세요." />
          <FormControl.ErrorMessage>이름을 입력해주세요.</FormControl.ErrorMessage>
        </FormControl>
        <Modal.ButtonLayout>
          <Modal.OutlineButton>취소</Modal.OutlineButton>
          <Modal.PrimaryButton>변경</Modal.PrimaryButton>
          <Modal.DeleteButton onClick={handleDeleteClick}>삭제하기</Modal.DeleteButton>
        </Modal.ButtonLayout>
      </Modal.Form>
    </Modal>
  )
}
