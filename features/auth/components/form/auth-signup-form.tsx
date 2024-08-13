import { Button } from "@common/components/ui/button"
import { useInput } from "@common/hooks"
import {
  FormControlEmail,
  FormControlNickname,
  FormControlPassword,
  FormControlPasswordConfirm,
} from "@common/components/form-control"

import { useSignup } from "@features/auth/hooks"
import classes from "./auth-form.module.css"
import useForm from "@/shared/@common/hooks/use-form"
import FormControl from "@common/components/ui/form-control"

import { defaultValues, validate, onSubmit } from "../../logic/signup.logic"
import { DefaultValues } from "../../types/signup.type"

export default function AuthSignUpForm() {
  const { register, hasFormError, isSubmitting, handleSubmit, hasError } = useForm<DefaultValues>({
    defaultValues,
    validate,
    onSubmit,
  })

  // const emailState = useInput(emailValidation)
  // const nicknameState = useInput(nicknameValidation)
  // const passwordState = useInput(passwordValidation)
  // const passwordConfirmState = useInput(passwordConfirmValidation.bind(null, passwordState.inputValue))
  // const { isLoading, hasFormError, isFormValid, handleSubmit } = useSignup({
  //   emailState,
  //   nicknameState,
  //   passwordState,
  //   passwordConfirmState,
  // })

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <FormControl type="form" id="email" hasError={hasError}>
        <FormControl.Label>이메일</FormControl.Label>
        <FormControl.Input type="text" placeholder="이메일을 입력해주세요" {...register("email")} />
        <FormControl.ErrorMessage />
      </FormControl>
      <FormControl type="form" id="nickname" hasError={hasError}>
        <FormControl.Label>닉네임</FormControl.Label>
        <FormControl.Input type="text" placeholder="닉네임을 입력해주세요" {...register("nickname")} />
        <FormControl.ErrorMessage />
      </FormControl>
      <FormControl type="form" id="password" hasError={hasError}>
        <FormControl.Label>비밀번호</FormControl.Label>
        <FormControl.Input type="password" placeholder="비밀번호를 입력해주세요" {...register("password")} />
        <FormControl.ErrorMessage />
      </FormControl>
      <FormControl type="form" id="passwordConfirm" hasError={hasError}>
        <FormControl.Label>비밀번호 확인</FormControl.Label>
        <FormControl.Input
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
          {...register("passwordConfirm")}
        />
        <FormControl.ErrorMessage />
      </FormControl>
      {/* <FormControlEmail {...emailState} type="form" id="email" />
      <FormControlNickname {...nicknameState} type="form" id="nickname" />
      <FormControlPassword {...passwordState} type="form" id="password" />
      <FormControlPasswordConfirm {...passwordConfirmState} type="form" id="password-confirm" /> */}
      {/* {hasFormError && <p className={classes["form-error"]}>{hasFormError}</p>} */}
      <Button size="auth" buttonStyle="primary" isDisabled={hasFormError} isLoading={isSubmitting} type="submit">
        가입하기
      </Button>
    </form>
  )
}
