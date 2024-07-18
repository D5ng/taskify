import { useInput } from "@common/hooks"
import { FormControlEmail, FormControlPassword } from "@common/components/form-control"
import { Button } from "@common/components/ui/button"
import { emailValidation, passwordValidation } from "@common/utils/validation"
import { useSignin } from "@features/auth/hooks"
import classes from "./auth-form.module.css"

export default function AuthSignInForm() {
  const emailState = useInput(emailValidation)
  const passwordState = useInput(passwordValidation)
  const { isLoading, hasFormError, isFormValid, handleSubmit } = useSignin({ emailState, passwordState })

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <FormControlEmail {...emailState} type="form" id="email" />
      <FormControlPassword {...passwordState} type="form" id="password" />
      {hasFormError && <p className={classes["form-error"]}>{hasFormError}</p>}
      <Button isDisabled={!isFormValid} isLoading={isLoading} buttonStyle="primary" size="auth" type="submit">
        가입하기
      </Button>
    </form>
  )
}
