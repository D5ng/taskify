import { FormRegister } from "@/shared/@common/types"
import { FormControl } from "@common/components/ui"

interface Props {
  hasError: (field: string) => string
  register: FormRegister
}

export default function FormControlDeadline({ hasError, register }: Props) {
  return (
    <FormControl type="modal" id="dueDate" hasError={hasError}>
      <FormControl.Label>마감일</FormControl.Label>
      <FormControl.Input type="datetime-local" {...register("dueDate")} />
      <FormControl.ErrorMessage />
    </FormControl>
  )
}
