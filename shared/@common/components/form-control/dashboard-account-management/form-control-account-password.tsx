import FormControl from "@common/components/ui/form-control"
import type { FormControlStates } from "@common/components/ui/form-control"

export function FormControlCurrentPassword(props: FormControlStates) {
  return (
    <FormControl value={{ ...props }}>
      <FormControl.Label>현재 비밀번호</FormControl.Label>
      <FormControl.Input type="password" placeholder="비밀번호를 입력해주세요" />
      <FormControl.ErrorMessage>유효한 비밀번호 형식이 아니에요.</FormControl.ErrorMessage>
    </FormControl>
  )
}

export function FormControlNewPassword(props: FormControlStates) {
  return (
    <FormControl value={{ ...props, type: "form", id: "new-password" }}>
      <FormControl.Label>새 비밀번호</FormControl.Label>
      <FormControl.Input type="password" placeholder="비밀번호를 입력해주세요" />
      <FormControl.ErrorMessage>유효한 비밀번호 형식이 아니에요.</FormControl.ErrorMessage>
    </FormControl>
  )
}

export function FormControlNewPasswordConfirm(props: FormControlStates) {
  return (
    <FormControl value={{ ...props, type: "form", id: "new-password-confirm" }}>
      <FormControl.Label>새 비밀번호 확인</FormControl.Label>
      <FormControl.Input type="password" placeholder="비밀번호를 입력해주세요" />
      <FormControl.ErrorMessage>비밀번호가 일치하지 않아요.</FormControl.ErrorMessage>
    </FormControl>
  )
}
