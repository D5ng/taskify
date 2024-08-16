import { Button } from "@common/components/ui/button"
import FormControl from "@common/components/ui/form-control"
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
        <FormControl type="form" id="currentPassword" hasError={fieldError}>
          <FormControl.Label>현재 비밀번호</FormControl.Label>
          <FormControl.Input type="password" placeholder="비밀번호를 입력해주세요" {...register("currentPassword")} />
          <FormControl.ErrorMessage />
        </FormControl>
        <FormControl type="form" id="newPassword" hasError={fieldError}>
          <FormControl.Label>새 비밀번호</FormControl.Label>
          <FormControl.Input type="password" placeholder="비밀번호를 입력해주세요" {...register("newPassword")} />
          <FormControl.ErrorMessage />
        </FormControl>
        <FormControl type="form" id="newPasswordConfirm" hasError={fieldError}>
          <FormControl.Label>새 비밀번호 확인</FormControl.Label>
          <FormControl.Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register("newPasswordConfirm")}
          />
          <FormControl.ErrorMessage />
        </FormControl>

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
