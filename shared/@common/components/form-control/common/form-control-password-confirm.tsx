import { FormControl } from "@common/components/ui"
import type { FormControlComponentProps } from "@common/components/ui"

export default function FormControlPasswordConfirm({ hasError, register }: FormControlComponentProps) {
  return (
    <FormControl type="form" id="passwordConfirm" hasError={hasError}>
      <FormControl.Label>비밀번호 확인</FormControl.Label>
      <FormControl.Input type="password" placeholder="비밀번호를 다시 입력해주세요" {...register("passwordConfirm")} />
      <FormControl.ErrorMessage />
    </FormControl>
  )
}
