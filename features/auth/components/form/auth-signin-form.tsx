import { useForm } from "@common/hooks"
import { Button } from "@common/components/ui"
import { Signin } from "@features/auth/logic"
import { useGuestSignin, useSignin } from "@features/auth/hooks"
import { SigninValues } from "@features/auth/types"
import { FormControlEmail, FormControlPassword } from "@shared/@common/components/form-control"
import classes from "./auth-form.module.css"

export default function AuthSignInForm() {
  const { formStates, handleSetError, register, handleSubmit, fieldError } = useForm<SigninValues>({
    defaultValues: Signin.defaultValues,
    validate: Signin.validate,
    options: { isFormReset: false },
  })

  const onSubmit = useSignin(handleSetError)
  const guestSignin = useGuestSignin()

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <FormControlEmail hasError={fieldError} register={register} />
      <FormControlPassword hasError={fieldError} register={register} />
      {formStates.fieldErrors.form && <p className={classes["form-error"]}>{formStates.fieldErrors.form}</p>}
      <Button
        size="auth"
        buttonStyle="primary"
        disabled={formStates.hasFormError}
        isLoading={formStates.isSubmitting}
        type="submit"
      >
        가입하기
      </Button>
      <Button
        size="auth"
        buttonStyle="primary"
        isLoading={guestSignin.isSubmitting}
        type="button"
        onClick={guestSignin.onSubmit}
      >
        게스트로 로그인하기
      </Button>
    </form>
  )
}
