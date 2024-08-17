import { FormRegister } from "@/shared/@common/types"
import { FormControl } from "@common/components/ui"

interface Props {
  hasError: (field: string) => string
  register: FormRegister
}

export default function FormControlTitle({ hasError, register }: Props) {
  return (
    <FormControl type="modal" id="title" hasError={hasError}>
      <FormControl.Label isRequired>제목</FormControl.Label>
      <FormControl.Input type="text" placeholder="제목을 입력해 주세요" {...register("title")} />
      <FormControl.ErrorMessage />
    </FormControl>
  )
}
