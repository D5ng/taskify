import { ColorChipList } from "@common/components"
import { Modal, FormControl } from "@common/components/ui"
import { useForm } from "@common/hooks"
import { DashboardData } from "@shared/dashboard/types"
import { Dashboard } from "@shared/dashboard/logic"
import { useCreateDashboardForm } from "@features/dashboard/dashboard-create-button/hooks"

interface Props {
  isToggle: boolean
  onCloseModal: () => void
}

export default function DashboardCreateModal(props: Props) {
  const { fieldError, formStates, register, handleSelect, handleSubmit, handleSetError, resetForm } =
    useForm<DashboardData>({
      defaultValues: Dashboard.defaultValues,
      validate: Dashboard.validate,
    })

  const onSubmit = useCreateDashboardForm({ setError: handleSetError, onCloseModal: props.onCloseModal })

  const modalValues = {
    onSubmit: handleSubmit(onSubmit),
    isDisabled: formStates.hasFormError,
    isLoading: formStates.isSubmitting,
    title: "대시보드 생성하기",
    onCloseModal: props.onCloseModal,
  }

  return (
    props.isToggle && (
      <Modal value={modalValues}>
        <Modal.Backdrop />
        <Modal.Form>
          <Modal.Title />
          <FormControl type="modal" id="title" hasError={fieldError}>
            <FormControl.Label>대시보드 이름</FormControl.Label>
            <FormControl.Input type="text" placeholder="대시보드 이름을 입력해주세요" {...register("title")} />
            <FormControl.ErrorMessage />
          </FormControl>
          <ColorChipList onChange={handleSelect("color")} value={formStates.formValues.color} />
          <Modal.ButtonLayout>
            <Modal.OutlineButton>취소</Modal.OutlineButton>
            <Modal.PrimaryButton>생성</Modal.PrimaryButton>
          </Modal.ButtonLayout>
        </Modal.Form>
      </Modal>
    )
  )
}
