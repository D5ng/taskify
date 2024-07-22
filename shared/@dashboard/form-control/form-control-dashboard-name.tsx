import FormControl from "@common/components/ui/form-control"
import type { FormControlStates } from "@common/components/ui/form-control"

export default function FormControlDashboardName(props: FormControlStates) {
  return (
    <FormControl value={{ ...props }}>
      <FormControl.Label>대시보드 이름</FormControl.Label>
      <FormControl.Input type="text" placeholder="대시보드 이름을 입력해주세요" />
      <FormControl.ErrorMessage>대시보드 이름을 입력해주세요.</FormControl.ErrorMessage>
    </FormControl>
  )
}
