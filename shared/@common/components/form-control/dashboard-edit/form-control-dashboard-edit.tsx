import { FormControl } from "@common/components/ui"
import type { FormControlComponentProps } from "@common/components/ui"

export function FormControlDashboardEdit({ hasError, register }: FormControlComponentProps) {
  return (
    <FormControl type="form" id="title" hasError={hasError}>
      <FormControl.Label>대시보드 이름</FormControl.Label>
      <FormControl.Input type="text" placeholder="대시보드 이름을 입력해주세요" {...register("title")} />
      <FormControl.ErrorMessage />
    </FormControl>
  )
}
