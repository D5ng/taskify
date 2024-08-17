import {
  FormControllCurrentPassword,
  FormControllNewPassword,
  FormControllNewPasswordConfirm,
} from "@common/components"
import { Button } from "@common/components/ui"
import { useForm } from "@common/hooks"
import { useUpdatePassword } from "@features/dashboard/dashboard-account-management/hooks"
import { PasswordDefaultValues } from "@features/dashboard/dashboard-account-management/types"
import { Password } from "@features/dashboard/dashboard-account-management/logic"
import classes from "./dashboard-mypage-password.module.css"

export default function DashboardMyPagePassword() {
  const { formStates, register, fieldError, handleSubmit, handleSetError } = useForm<PasswordDefaultValues>({
    defaultValues: Password.defaultValues,
    validate: Password.validate,
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
            isDisabled={formStates.hasFormError}
            isLoading={formStates.isSubmitting}
          >
            저장
          </Button>
        </div>
      </form>
    </>
  )
}
