import React from "react"
import FormControl from "@common/components/ui/form-control"
import type { UploadStates } from "@common/components/ui/form-control"

export default function FormControlProfileUpload(props: UploadStates) {
  return (
    <FormControl value={{ inputValue: "", type: "form", id: "mypage-upload" }}>
      <FormControl.Upload isLoading={props.isLoading}>
        <FormControl.Input type="file" />
      </FormControl.Upload>
    </FormControl>
  )
}
