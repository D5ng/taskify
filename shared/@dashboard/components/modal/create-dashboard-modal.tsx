import Modal from "@common/components/ui/modal"
import { useDashboardPageStore, useInput } from "@common/hooks"
import { useColorChipSelect, useCreateDashboardForm } from "@dashboard/hooks"
import { ColorChipColor } from "@common/types"
import { isNotEmptyValidation } from "@common/utils/validation"
import { ColorChipList } from "@common/components/ui/chips"
import { FormControlDashboardName } from "@dashboard/components/form-control"

interface Props {
  isToggle: boolean
  onCloseModal: () => void
}

export default function CreateDashboardModal(props: Props) {
  const inputStates = useInput(isNotEmptyValidation)
  const colorChipStates = useColorChipSelect<ColorChipColor>("#7AC555")
  const currentPage = useDashboardPageStore.use.currentPage()

  const onCloseModal = () => {
    colorChipStates.handleResetColorChip()
    props.onCloseModal()
  }

  const formStates = useCreateDashboardForm({
    currentPage,
    title: inputStates.inputValue,
    color: colorChipStates.selectedColorChip,
    onCloseModal,
  })

  const modalValues = {
    ...formStates,
    title: "대시보드 생성하기",
    onCloseModal,
  }

  return (
    props.isToggle && (
      <Modal value={modalValues}>
        <Modal.Backdrop />
        <Modal.Form>
          <Modal.Title />
          <FormControlDashboardName {...inputStates} type="modal" id="dashboard-name" />
          <ColorChipList {...colorChipStates} />
          <Modal.ButtonLayout>
            <Modal.OutlineButton>취소</Modal.OutlineButton>
            <Modal.PrimaryButton>생성</Modal.PrimaryButton>
          </Modal.ButtonLayout>
        </Modal.Form>
      </Modal>
    )
  )
}
