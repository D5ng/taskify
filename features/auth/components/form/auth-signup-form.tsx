import { Button } from "@common/components/ui/button"
import { useInput } from "@common/hooks"
import {
  FormControlEmail,
  FormControlNickname,
  FormControlPassword,
  FormControlPasswordConfirm,
} from "@common/components/form-control"
import {
  emailValidation,
  nicknameValidation,
  passwordValidation,
  passwordConfirmValidation,
} from "@common/utils/validation"

import { useSignup } from "@features/auth/hooks"
import classes from "./auth-form.module.css"

export default function AuthSignUpForm() {
  const emailState = useInput(emailValidation)
  const nicknameState = useInput(nicknameValidation)
  const passwordState = useInput(passwordValidation)
  const passwordConfirmState = useInput(passwordConfirmValidation.bind(null, passwordState.inputValue))
  const { isLoading, hasFormError, isFormValid, handleSubmit } = useSignup({
    emailState,
    nicknameState,
    passwordState,
    passwordConfirmState,
  })

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <FormControlEmail {...emailState} type="form" id="email" />
      <FormControlNickname {...nicknameState} type="form" id="nickname" />
      <FormControlPassword {...passwordState} type="form" id="password" />
      <FormControlPasswordConfirm {...passwordConfirmState} type="form" id="password-confirm" />
      {hasFormError && <p className={classes["form-error"]}>{hasFormError}</p>}
      <Button size="auth" buttonStyle="primary" isDisabled={!isFormValid} isLoading={isLoading} type="submit">
        가입하기
      </Button>
    </form>
  )
}
