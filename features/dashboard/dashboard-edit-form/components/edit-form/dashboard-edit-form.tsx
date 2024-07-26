import { useEditDashboardForm } from "@features/dashboard/dashboard-edit-form/hooks"
import { useDashboardPageStore, useFetchDashboard } from "@/shared/dashboard/hooks"
import { Button } from "@common/components/ui/button"
import { ColorChipList } from "@common/components/color-chip"
import { FormControlDashboardName } from "@common/components/form-control"
import { useInput, useSelect } from "@common/hooks"
import { ColorChipColor } from "@common/types"
import { isNotEmptyValidation } from "@common/utils/validation"
import { Dashboard } from "@/shared/dashboard/types"
import classes from "./dashboard-edit-form.module.css"

interface Props {
  dashboard: Dashboard
}

export default function DashboardEditForm(props: Props) {
  const inputStates = useInput(isNotEmptyValidation, props.dashboard.title)
  const colorChipStates = useSelect<ColorChipColor>(props.dashboard.color)
  const currentPage = useDashboardPageStore.use.currentPage()

  const onReset = () => {
    inputStates.handleInputReset()
    colorChipStates.onResetSelectedItem()
  }

  const formStates = useEditDashboardForm({
    currentPage,
    title: inputStates.inputValue,
    color: colorChipStates.selectedItem,
    onReset,
  })

  return (
    <form onSubmit={formStates.onSubmit}>
      <h2 className={classes["new-dashboard-title"]}>{props.dashboard.title}</h2>
      <div className={classes["color-chips"]}>
        <ColorChipList
          onSelectedColorChip={colorChipStates.onSelectedItem}
          selectedColorChip={colorChipStates.selectedItem}
        />
      </div>
      <FormControlDashboardName {...inputStates} type="form" id="dashboard-name" />
      <div className={classes["new-dashboard-button"]}>
        <Button
          isLoading={formStates.isLoading}
          isDisabled={formStates.isLoading}
          size="small"
          buttonStyle="primary"
          type="submit"
        >
          변경
        </Button>
      </div>
    </form>
  )
}
