import { FormRegister } from "@common/types"
import { FormControl } from "@common/components/ui"
import { KeyboardEventHandler } from "react"

interface Props {
  hasError: (field: string) => string
  register: FormRegister
  onKeyDown: KeyboardEventHandler
}

export function FormControlComment({ hasError, register, ...props }: Props) {
  return (
    <FormControl type="" id="content" hasError={hasError}>
      <FormControl.TextArea placeholder="댓글 작성하기" {...register("content")} {...props} />
    </FormControl>
  )
}
