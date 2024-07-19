import FormControl from "@common/components/ui/form-control"
import type { FormControlStates } from "@common/components/ui/form-control"

export default function FormControlNickname(props: FormControlStates) {
  return (
    <FormControl value={{ ...props, type: "form" }}>
      <FormControl.Label>닉네임</FormControl.Label>
      <FormControl.Input type="text" placeholder="닉네임을 입력해주세요" />
      <FormControl.ErrorMessage>유효한 닉네임 형식이 아니에요.</FormControl.ErrorMessage>
    </FormControl>
  )
}
