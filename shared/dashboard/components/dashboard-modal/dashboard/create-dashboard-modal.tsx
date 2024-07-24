import Modal from "@common/components/ui/modal"
import { useInput } from "@common/hooks"
import { ColorChipColor } from "@shared/dashboard/types"
import { useColorChipSelect, useCreateDashboard, useDashboardPageStore } from "@shared/dashboard/hooks"
import { isNotEmptyValidation } from "@common/utils/validation"
import { FormControlDashboardName, ColorChipList } from "@shared/dashboard/components"
import { FormEventHandler } from "react"

interface Props {
  isToggle: boolean
  onCloseModal: () => void
}

export default function CreateDashboardModal(props: Props) {
  const currentPage = useDashboardPageStore.use.currentPage()

  const inputStates = useInput(isNotEmptyValidation)
  const colorChipStates = useColorChipSelect<ColorChipColor>("#7AC555")

  const createDashboardMutation = useCreateDashboard(currentPage)

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    await createDashboardMutation.trigger({ title: inputStates.inputValue, color: colorChipStates.selectedColorChip })
    colorChipStates.handleResetColorChip()
    props.onCloseModal()
  }

  const modalValues = {
    onSubmit,
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
