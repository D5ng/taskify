import FormControl from "@common/components/ui/form-control"
import type { InputStates } from "@common/components/ui/form-control"

export default function FormControlDeadline(props: InputStates) {
  return (
    <FormControl value={{ ...props, type: "modal", id: "task-deadline" }}>
      <FormControl.Label>마감일</FormControl.Label>
      <FormControl.Input type="datetime-local" />
      <FormControl.ErrorMessage>마감일을 입력해 주세요.</FormControl.ErrorMessage>
    </FormControl>
  )
}
