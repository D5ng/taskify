import FormControl from "@common/components/ui/form-control"
import type { InputStates } from "@common/components/ui/form-control"

export default function FormControlDescription(props: InputStates) {
  return (
    <FormControl value={{ ...props, type: "modal", id: "task-description" }}>
      <FormControl.Label isRequired>설명</FormControl.Label>
      <FormControl.TextArea placeholder="설명을 입력해 주세요" />
      <FormControl.ErrorMessage>설명을 입력해 주세요</FormControl.ErrorMessage>
    </FormControl>
  )
}
