import FormControl from "@common/components/ui/form-control"
import type { UploadStates } from "@common/components/ui/form-control"

export default function FormControlUpload(props: UploadStates) {
  return (
    <FormControl value={{ ...props, inputValue: "", type: "modal", id: "task-upload" }}>
      <FormControl.Label>이미지</FormControl.Label>
      <FormControl.Upload isLoading={props.isLoading}>
        <FormControl.Input type="file" />
      </FormControl.Upload>
    </FormControl>
  )
}
