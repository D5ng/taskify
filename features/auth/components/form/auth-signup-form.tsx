import { Button } from "@common/components/ui"
import { useForm } from "@common/hooks"
import { Signup } from "@features/auth/logic"
import { SignupValues } from "@features/auth/types"
import { useSignup } from "@features/auth/hooks"
import {
  FormControlEmail,
  FormControlNickname,
  FormControlPassword,
  FormControlPasswordConfirm,
} from "@shared/@common/components/form-control"
import classes from "./auth-form.module.css"

export default function AuthSignUpForm() {
  const { register, formStates, handleSubmit, fieldError, handleSetError } = useForm<SignupValues>({
    defaultValues: Signup.defaultValues,
    validate: Signup.validate,
  })

  const onSubmit = useSignup(handleSetError)

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <FormControlEmail hasError={fieldError} register={register} />
      <FormControlNickname hasError={fieldError} register={register} />
      <FormControlPassword hasError={fieldError} register={register} />
      <FormControlPasswordConfirm hasError={fieldError} register={register} />
      <Button
        size="auth"
        buttonStyle="primary"
        isDisabled={formStates.hasFormError}
        isLoading={formStates.isSubmitting}
        type="submit"
      >
        가입하기
      </Button>
    </form>
  )
}
