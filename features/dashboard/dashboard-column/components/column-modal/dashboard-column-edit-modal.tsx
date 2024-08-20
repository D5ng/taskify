import { Modal, FormControl } from "@common/components/ui"
import { useForm } from "@common/hooks"
import type { DashboardColumn, UpdateDashboardColumn } from "@shared/dashboard/types"
import { validate, defaultValues } from "@features/dashboard/dashboard-column/logic"
import { useDashboardColumnEditForm } from "@features/dashboard/dashboard-column/hooks"

interface Props extends Pick<DashboardColumn, "id" | "title"> {
  onCloseModal: () => void
  onNextModal: () => void
}

export default function DashboardColumnEditModal({ onNextModal, onCloseModal, id, title }: Props) {
  const { formStates, register, handleSubmit, handleSetError, fieldError } = useForm<UpdateDashboardColumn>({
    defaultValues: defaultValues(title),
    validate,
  })

  const onSubmit = useDashboardColumnEditForm({ columnId: id, onCloseModal, setError: handleSetError })

  const handleDeleteClick = () => {
    onCloseModal()
    onNextModal()
  }

  const modalValues = {
    onSubmit: handleSubmit(onSubmit),
    isDisabled: formStates.hasFormError,
    isLoading: formStates.isSubmitting,
    title: "컬럼 관리",
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
          <Modal.PrimaryButton>변경</Modal.PrimaryButton>
          <Modal.DeleteButton onClick={handleDeleteClick}>삭제하기</Modal.DeleteButton>
        </Modal.ButtonLayout>
      </Modal.Form>
    </Modal>
  )
}
