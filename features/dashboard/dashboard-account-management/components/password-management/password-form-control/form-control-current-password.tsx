import { FormControl } from "@common/components/ui"
import type { FormControlComponentProps } from "@common/components/ui"

export default function FormControllCurrentPassword({ hasError, register }: FormControlComponentProps) {
  return (
    <FormControl type="form" id="currentPassword" hasError={hasError}>
      <FormControl.Label>현재 비밀번호</FormControl.Label>
      <FormControl.Input type="password" placeholder="비밀번호를 입력해주세요" {...register("currentPassword")} />
      <FormControl.ErrorMessage />
    </FormControl>
  )
}
