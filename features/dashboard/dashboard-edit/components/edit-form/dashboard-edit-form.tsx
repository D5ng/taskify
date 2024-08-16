import React from "react"
import { useFetchDashboard } from "@/shared/dashboard/hooks"
import { Button } from "@common/components/ui/button"
import { ColorChipList } from "@common/components/color-chip"
import { useForm } from "@common/hooks"
import { validate } from "@features/dashboard/dashboard-edit/logic"
import { useEditDashboardForm } from "@features/dashboard/dashboard-edit/hooks"
import FormControl from "@common/components/ui/form-control"
import classes from "./dashboard-edit-form.module.css"
import { DashboardData } from "@/shared/dashboard/types"

interface Props {
  dashboardId: number
}

export default function DashboardEditForm(props: Props) {
  const dashboardQuery = useFetchDashboard(props.dashboardId)
  const { register, handleSubmit, fieldError, formStates, handleSetError, handleSelect } = useForm<DashboardData>({
    defaultValues: {
      title: dashboardQuery.data!.title,
      color: dashboardQuery.data!.color,
    },
    validate,
  })

  const onSubmit = useEditDashboardForm(handleSetError)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className={classes["new-dashboard-title"]}>{dashboardQuery.data!.title}</h2>
      <div className={classes["color-chips"]}>
        <ColorChipList onChange={handleSelect("color")} value={formStates.formValues.color} />
      </div>
      <FormControl type="form" id="title" hasError={fieldError}>
        <FormControl.Label>대시보드 이름</FormControl.Label>
        <FormControl.Input type="text" placeholder="대시보드 이름을 입력해주세요" {...register("title")} />
        <FormControl.ErrorMessage />
      </FormControl>
      <div className={classes["new-dashboard-button"]}>
        <Button
          isLoading={formStates.isSubmitting}
          isDisabled={formStates.hasFormError}
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
