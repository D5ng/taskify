import { FormRegister } from "@/shared/@common/types"
import { FormControl } from "@common/components/ui"

interface Props {
  hasError: (field: string) => string
  register: FormRegister
}

export default function FormControlDescription({ hasError, register }: Props) {
  return (
    <FormControl type="modal" id="description" hasError={hasError}>
      <FormControl.Label isRequired>설명</FormControl.Label>
      <FormControl.TextArea placeholder="설명을 입력해 주세요" {...register("description")} />
      <FormControl.ErrorMessage />
    </FormControl>
  )
}
