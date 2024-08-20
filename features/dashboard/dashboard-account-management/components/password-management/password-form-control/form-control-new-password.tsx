import { FormControl } from "@common/components/ui"
import type { FormControlComponentProps } from "@common/components/ui"

export default function FormControllNewPassword({ hasError, register }: FormControlComponentProps) {
  return (
    <FormControl type="form" id="newPassword" hasError={hasError}>
      <FormControl.Label>새 비밀번호</FormControl.Label>
      <FormControl.Input type="password" placeholder="비밀번호를 입력해주세요" {...register("newPassword")} />
      <FormControl.ErrorMessage />
    </FormControl>
  )
}
