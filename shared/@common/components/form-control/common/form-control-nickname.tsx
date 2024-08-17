import { FormControl } from "@common/components/ui"
import type { FormControlComponentProps } from "@common/components/ui"

export default function FormControlNickname({ hasError, register }: FormControlComponentProps) {
  return (
    <FormControl type="form" id="nickname" hasError={hasError}>
      <FormControl.Label>닉네임</FormControl.Label>
      <FormControl.Input type="text" placeholder="닉네임을 입력해주세요" {...register("nickname")} />
      <FormControl.ErrorMessage />
    </FormControl>
  )
}
