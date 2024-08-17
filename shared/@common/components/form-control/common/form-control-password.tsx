import { FormControl } from "@common/components/ui"
import type { FormControlComponentProps } from "@common/components/ui"

export default function FormControlPassword({ hasError, register }: FormControlComponentProps) {
  return (
    <FormControl type="form" id="password" hasError={hasError}>
      <FormControl.Label>비밀번호</FormControl.Label>
      <FormControl.Input type="password" placeholder="비밀번호를 입력해주세요" {...register("password")} />
      <FormControl.ErrorMessage />
    </FormControl>
  )
}
