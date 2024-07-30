import { FormEventHandler } from "react"
import Modal from "@common/components/ui/modal"
import { useInput, useSelect } from "@common/hooks"
import { ColorChipColor } from "@common/types"
import { useCreateDashboard, useDashboardPageStore } from "@shared/dashboard/hooks"
import { isNotEmptyValidation } from "@common/utils/validation"
import { FormControlDashboardName } from "@common/components/form-control"
import { ColorChipList } from "@common/components/color-chip"

interface Props {
  isToggle: boolean
  onCloseModal: () => void
}

export default function CreateDashboardModal(props: Props) {
  const currentPage = useDashboardPageStore.use.currentPage()
  const inputStates = useInput(isNotEmptyValidation)
  const colorChipStates = useSelect<ColorChipColor>("#7AC555")

  const createDashboardMutation = useCreateDashboard(currentPage)

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    await createDashboardMutation.trigger({ title: inputStates.inputValue, color: colorChipStates.selectedItem })
    colorChipStates.onResetSelectedItem()
    props.onCloseModal()
  }

  const modalValues = {
    onSubmit,
    isDisabled: !inputStates.isValid,
    isLoading: createDashboardMutation.isMutating,
    title: "대시보드 생성하기",
    onCloseModal: props.onCloseModal,
  }

  return (
    props.isToggle && (
      <Modal value={modalValues}>
        <Modal.Backdrop />
        <Modal.Form>
          <Modal.Title />
          <FormControlDashboardName {...inputStates} type="modal" id="dashboard-name" />
          <ColorChipList
            onSelectedColorChip={colorChipStates.onSelectedItem}
            selectedColorChip={colorChipStates.selectedItem}
          />
          <Modal.ButtonLayout>
            <Modal.OutlineButton>취소</Modal.OutlineButton>
            <Modal.PrimaryButton>생성</Modal.PrimaryButton>
          </Modal.ButtonLayout>
        </Modal.Form>
      </Modal>
    )
  )
}
