import React from "react"
import { useEditDashboardForm } from "@/features/dashboard/dashboard-edit/hooks"
import { useFetchDashboard } from "@/shared/dashboard/hooks"
import { Button } from "@common/components/ui/button"
import { ColorChipList } from "@common/components/color-chip"
import { FormControlDashboardName } from "@common/components/form-control"
import { useInput, useSelect } from "@common/hooks"
import { ColorChipColor } from "@common/types"
import { isNotEmptyValidation } from "@common/utils/validation"
import classes from "./dashboard-edit-form.module.css"

interface Props {
  dashboardId: number
}

export default function DashboardEditForm(props: Props) {
  const dashboardQuery = useFetchDashboard(props.dashboardId)
  const inputStates = useInput(isNotEmptyValidation, dashboardQuery.data!.title)
  const colorChipStates = useSelect<ColorChipColor>(dashboardQuery.data!.color)

  const formStates = useEditDashboardForm({
    title: inputStates.inputValue,
    color: colorChipStates.selectedItem,
  })

  return (
    <form onSubmit={formStates.onSubmit}>
      <h2 className={classes["new-dashboard-title"]}>{dashboardQuery.data!.title}</h2>
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
