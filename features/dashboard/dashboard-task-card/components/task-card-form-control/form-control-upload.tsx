import { useUpload } from "@/shared/@common/hooks"
import { TaskCardApiInstance } from "@/shared/dashboard/services"
import { UploadResponse } from "@/shared/dashboard/types"
import { FormControl } from "@common/components/ui"

interface Props {
  columnId: number
  setValue: (field: string, value: string) => void
  hasError: (field: string) => string
  previewImageUrl: string
}

export default function FormControlUpload(props: Props) {
  const { columnId, setValue, hasError, previewImageUrl } = props
  const imageStates = useUpload<UploadResponse>({
    onUpload: async (formData: FormData) => await TaskCardApiInstance.cardImageUpload(columnId, formData),
    onSuccess: (result) => setValue("image", result.imageUrl),
    onFailed: () => console.log("failed"),
  })

  return (
    <FormControl type="modal" id="image" hasError={hasError}>
      <FormControl.Label>이미지</FormControl.Label>
      <FormControl.Upload isLoading={imageStates.isLoading} previewImageUrl={previewImageUrl}>
        <FormControl.Input type="file" onChange={imageStates.handleUpload} />
      </FormControl.Upload>
    </FormControl>
  )
}
