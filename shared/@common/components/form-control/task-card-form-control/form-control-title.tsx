import FormControl from "@common/components/ui/form-control"
import type { InputStates } from "@common/components/ui/form-control"

export default function FormControlTitle(props: InputStates) {
  return (
    <FormControl value={{ ...props, type: "modal", id: "task-title" }}>
      <FormControl.Label isRequired>제목</FormControl.Label>
      <FormControl.Input type="text" placeholder="제목을 입력해 주세요" />
      <FormControl.ErrorMessage>제목을 입력해 주세요.</FormControl.ErrorMessage>
    </FormControl>
  )
}
