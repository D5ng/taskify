import { useCallback } from "react"
import { ColorChipList } from "@common/components"
import { Button } from "@common/components/ui"
import { useForm } from "@common/hooks"
import { useFetchDashboard } from "@shared/dashboard/hooks"
import { DashboardData } from "@shared/dashboard/types"
import { defaultValues, validate } from "@features/dashboard/dashboard-edit/logic"
import { useEditDashboardForm } from "@features/dashboard/dashboard-edit/hooks"
import { FormControlDashboardEdit } from "@features/dashboard/dashboard-edit/components"
import classes from "./dashboard-edit-form.module.css"

interface Props {
  dashboardId: number
}

export default function DashboardEditForm(props: Props) {
  const dashboardQuery = useFetchDashboard(props.dashboardId)
  const { title, color } = dashboardQuery.data!
  const { register, handleSubmit, fieldError, formStates, handleSetError, handleSelect } = useForm<DashboardData>({
    defaultValues: defaultValues({ title, color }),
    validate: useCallback((values) => validate(values, title, color), [title, color]),
  })

  const onSubmit = useEditDashboardForm(handleSetError)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className={classes["new-dashboard-title"]}>{dashboardQuery.data!.title}</h2>
      <div className={classes["color-chips"]}>
        <ColorChipList onChange={handleSelect("color")} value={formStates.formValues.color} />
      </div>
      <FormControlDashboardEdit hasError={fieldError} register={register} />
      <div className={classes["new-dashboard-button"]}>
        <Button
          isLoading={formStates.isSubmitting}
          disabled={formStates.hasFormError}
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
