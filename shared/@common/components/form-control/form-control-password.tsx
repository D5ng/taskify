import FormControl from "@common/components/ui/form-control-compound/form-control"
import { FormControlStates } from "@common/components/ui/form-control-compound/form-control.type"

export default function FormControlPassword(props: FormControlStates) {
  return (
    <FormControl value={{ ...props, type: "form" }}>
      <FormControl.Label>비밀번호</FormControl.Label>
      <FormControl.Input type="password" placeholder="비밀번호를 입력해주세요" />
      <FormControl.ErrorMessage>유효한 비밀번호 형식이 아니에요.</FormControl.ErrorMessage>
    </FormControl>
  )
}
