import FormControl from "@common/components/ui/form-control-compound/form-control"
import { FormControlStates } from "@common/components/ui/form-control-compound/form-control.type"

export default function FormControlPasswordConfirm(props: FormControlStates) {
  return (
    <FormControl value={{ ...props, type: "form" }}>
      <FormControl.Label>비밀번호 확인</FormControl.Label>
      <FormControl.Input type="password" placeholder="비밀번호를 다시 입력해주세요" />
      <FormControl.ErrorMessage>비밀번호가 일치하지 않아요.</FormControl.ErrorMessage>
    </FormControl>
  )
}
