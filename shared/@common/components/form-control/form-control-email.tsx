import FormControl from "@common/components/ui/form-control"
import type { FormControlStates } from "@common/components/ui/form-control"

export default function FormControlEmail(props: FormControlStates) {
  return (
    <FormControl value={{ ...props, type: "form" }}>
      <FormControl.Label>이메일</FormControl.Label>
      <FormControl.Input type="text" placeholder="이메일을 입력해주세요" />
      <FormControl.ErrorMessage>유효한 이메일 형식이 아니에요.</FormControl.ErrorMessage>
    </FormControl>
  )
}
