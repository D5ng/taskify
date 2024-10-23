import { ChangeEventHandler, useState } from "react"
import { previewImage } from "@common/utils/upload"

interface Props<T> {
  defaultValue?: string
  onUpload: (formData: FormData) => Promise<T>
  onSuccess: (result: T) => void
  onFailed: () => void
}

export default function useUpload<T>({ defaultValue, onUpload, onSuccess, onFailed }: Props<T>) {
  const [previewImageUrl, setPreviewImageUrl] = useState(defaultValue || "")
  const [isLoading, setIsLoading] = useState(false)

  const handleUpload: ChangeEventHandler<HTMLInputElement> = async (event) => {
    const selectedImage = event.target.files![0]
    if (!selectedImage) return

    setIsLoading(true)
    const formData = new FormData()
    formData.append("image", selectedImage)

    try {
      const result = await onUpload(formData)
      onSuccess(result)
      previewImage(selectedImage, (data) => setPreviewImageUrl(data.target?.result as string))
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    handleUpload,
    previewImageUrl,
  }
}
