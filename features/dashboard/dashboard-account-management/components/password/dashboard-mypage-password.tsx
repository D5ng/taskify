import React from "react"
import { useInput } from "@common/hooks"
import { Button } from "@common/components/ui/button"
import { useUpdatePassword } from "@features/dashboard/dashboard-account-management/hooks"
import { passwordConfirmValidation, passwordValidation } from "@common/utils/validation"
import {
  FormControlCurrentPassword,
  FormControlNewPassword,
  FormControlNewPasswordConfirm,
} from "@common/components/form-control"
import classes from "./dashboard-mypage-password.module.css"

export default function DashboardMyPagePassword() {
  const currentPasswordState = useInput(passwordValidation)
  const newPasswordState = useInput(passwordValidation)
  const newPasswordConfirmState = useInput(passwordConfirmValidation.bind(null, newPasswordState.inputValue))

  const { isLoading, hasFormError, isFormValid, handleSubmit } = useUpdatePassword({
    currentPasswordState,
    newPasswordState,
    newPasswordConfirmState,
  })

  return (
    <>
      <h2 className={classes.title}>비밀번호 변경</h2>
      <form className={classes["password-form"]} onSubmit={handleSubmit}>
        <FormControlCurrentPassword {...currentPasswordState} type="form" id="current-password" />
        <FormControlNewPassword {...newPasswordState} type="form" id="new-password" />
        <FormControlNewPasswordConfirm {...newPasswordConfirmState} type="form" id="new-password-confirm" />
        <div className={classes["password-form__submit"]}>
          <Button type="submit" buttonStyle="primary" size="small" isDisabled={isFormValid} isLoading={isLoading}>
            저장
          </Button>
        </div>
      </form>
    </>
  )
}
