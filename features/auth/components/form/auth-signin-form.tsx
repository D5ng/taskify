import { useForm } from "@common/hooks"
import { Button } from "@common/components/ui/button"
import { Signin } from "@features/auth/logic"
import FormControl from "@/shared/@common/components/ui/form-control"
import { useSignin } from "@features/auth/hooks"
import { SigninValues } from "@features/auth/types"
import classes from "./auth-form.module.css"

export default function AuthSignInForm() {
  const { formStates, handleSetError, register, handleSubmit, fieldError } = useForm<SigninValues>({
    defaultValues: Signin.defaultValues,
    validate: Signin.validate,
  })

  const onSubmit = useSignin(handleSetError)

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <FormControl type="form" id="email" hasError={fieldError}>
        <FormControl.Label>이메일</FormControl.Label>
        <FormControl.Input type="text" placeholder="이메일을 입력해주세요" {...register("email")} />
        <FormControl.ErrorMessage />
      </FormControl>
      <FormControl type="form" id="password" hasError={fieldError}>
        <FormControl.Label>비밀번호</FormControl.Label>
        <FormControl.Input type="password" placeholder="비밀번호를 입력해주세요" {...register("password")} />
        <FormControl.ErrorMessage />
      </FormControl>
      {formStates.fieldErros.form && <p className={classes["form-error"]}>{formStates.fieldErros.form}</p>}
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
