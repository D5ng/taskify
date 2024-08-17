import { FormControl } from "@common/components/ui"
import type { FormControlComponentProps } from "@common/components/ui"

export default function FormControlEmail({ hasError, register }: FormControlComponentProps) {
  return (
    <FormControl type="form" id="email" hasError={hasError}>
      <FormControl.Label>이메일</FormControl.Label>
      <FormControl.Input type="text" placeholder="이메일을 입력해주세요" {...register("email")} />
      <FormControl.ErrorMessage />
    </FormControl>
  )
}
