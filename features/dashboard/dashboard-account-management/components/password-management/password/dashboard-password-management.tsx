import { Button } from "@common/components/ui"
import { useForm } from "@common/hooks"
import {
  FormControllCurrentPassword,
  FormControllNewPassword,
  FormControllNewPasswordConfirm,
} from "@features/dashboard/dashboard-account-management/components"
import { useUpdatePassword } from "@features/dashboard/dashboard-account-management/hooks"
import { PasswordDefaultValues } from "@features/dashboard/dashboard-account-management/types"
import { PasswordLogic } from "@features/dashboard/dashboard-account-management/logic"
import classes from "./dashboard-password-management.module.css"

export default function DashboardMyPagePassword() {
  const { formStates, register, fieldError, handleSubmit, handleSetError } = useForm<PasswordDefaultValues>({
    defaultValues: PasswordLogic.defaultValues,
    validate: PasswordLogic.validate,
  })

  const onSubmit = useUpdatePassword(handleSetError)

  return (
    <>
      <h2 className={classes.title}>비밀번호 변경</h2>
      <form className={classes["password-form"]} onSubmit={handleSubmit(onSubmit)}>
        <FormControllCurrentPassword hasError={fieldError} register={register} />
        <FormControllNewPassword hasError={fieldError} register={register} />
        <FormControllNewPasswordConfirm hasError={fieldError} register={register} />

        <div className={classes["password-form__submit"]}>
          <Button
            type="submit"
            buttonStyle="primary"
            size="small"
            disabled={formStates.hasFormError}
            isLoading={formStates.isSubmitting}
          >
            저장
          </Button>
        </div>
      </form>
    </>
  )
}
