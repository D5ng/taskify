import { FormControl } from "@common/components/ui"
import { useUpload } from "@common/hooks"
import { AuthApiInstance } from "@common/services"

interface Props {
  setValue: (field: string, value: string) => void
  hasError: (field: string) => string
  previewImageUrl: string
}

export default function FormControlProfileUpload({ hasError, setValue, previewImageUrl }: Props) {
  const imageStates = useUpload<{ profileImageUrl: string }>({
    onUpload: async (formData: FormData) => AuthApiInstance.profileImage(formData),
    onSuccess: (result) => setValue("profileImageUrl", result.profileImageUrl),
    onFailed: () => console.log("failed"),
  })
  return (
    <FormControl type="form" id="profileImageUrl" hasError={hasError}>
      <FormControl.Upload isLoading={imageStates.isLoading} previewImageUrl={previewImageUrl}>
        <FormControl.Input type="file" onChange={imageStates.handleUpload} />
      </FormControl.Upload>
    </FormControl>
  )
}
