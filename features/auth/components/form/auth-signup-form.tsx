import { Button } from "@common/components/ui/button"
import FormControl from "@common/components/ui/form-control"
import { useForm } from "@common/hooks"
import { Signup } from "@features/auth/logic"
import { SignupDefaultValues } from "@features/auth/types"
import classes from "./auth-form.module.css"
import { useSignup } from "../../hooks"

export default function AuthSignUpForm() {
  const { register, formStates, handleSubmit, fieldError, handleSetError } = useForm<SignupDefaultValues>({
    defaultValues: Signup.defaultValues,
    validate: Signup.validate,
  })

  const onSubmit = useSignup(handleSetError)

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <FormControl type="form" id="email" hasError={fieldError}>
        <FormControl.Label>이메일</FormControl.Label>
        <FormControl.Input type="text" placeholder="이메일을 입력해주세요" {...register("email")} />
        <FormControl.ErrorMessage />
      </FormControl>
      <FormControl type="form" id="nickname" hasError={fieldError}>
        <FormControl.Label>닉네임</FormControl.Label>
        <FormControl.Input type="text" placeholder="닉네임을 입력해주세요" {...register("nickname")} />
        <FormControl.ErrorMessage />
      </FormControl>
      <FormControl type="form" id="password" hasError={fieldError}>
        <FormControl.Label>비밀번호</FormControl.Label>
        <FormControl.Input type="password" placeholder="비밀번호를 입력해주세요" {...register("password")} />
        <FormControl.ErrorMessage />
      </FormControl>
      <FormControl type="form" id="passwordConfirm" hasError={fieldError}>
        <FormControl.Label>비밀번호 확인</FormControl.Label>
        <FormControl.Input
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
          {...register("passwordConfirm")}
        />
        <FormControl.ErrorMessage />
      </FormControl>
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
