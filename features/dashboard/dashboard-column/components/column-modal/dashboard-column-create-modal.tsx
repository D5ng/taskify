import { Modal, FormControl } from "@common/components/ui"
import { useForm } from "@common/hooks"
import type { DashboardColumn, UpdateDashboardColumn } from "@shared/dashboard/types"
import { ColumnCreateLogic } from "@features/dashboard/dashboard-column/logic"
import { useColumnCreateForm } from "@features/dashboard/dashboard-column/hooks"

interface Props {
  onCloseModal: () => void
}

export default function DashboardColumnCreateModal({ onCloseModal }: Props) {
  const { formStates, register, handleSubmit, handleSetError, fieldError } = useForm<UpdateDashboardColumn>({
    defaultValues: ColumnCreateLogic.defaultValues,
    validate: ColumnCreateLogic.validate,
  })

  const onSubmit = useColumnCreateForm({ onCloseModal, setError: handleSetError })

  const modalValues = {
    onSubmit: handleSubmit(onSubmit),
    isDisabled: formStates.hasFormError,
    isLoading: formStates.isSubmitting,
    title: "새 컬럼 생성",
    onCloseModal,
  }

  return (
    <Modal value={modalValues}>
      <Modal.Backdrop />
      <Modal.Form>
        <Modal.Title />
        <FormControl type="modal" id="title" hasError={fieldError}>
          <FormControl.Label>이름</FormControl.Label>
          <FormControl.Input type="text" placeholder="이름을 입력해주세요." {...register("title")} />
          <FormControl.ErrorMessage />
        </FormControl>
        <Modal.ButtonLayout>
          <Modal.OutlineButton>취소</Modal.OutlineButton>
          <Modal.PrimaryButton>생성</Modal.PrimaryButton>
        </Modal.ButtonLayout>
      </Modal.Form>
    </Modal>
  )
}
