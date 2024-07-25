import { ChangeEventHandler, useState } from "react"
import { previewImage } from "@common/utils/upload"
import { TaskCardApiInstance } from "@shared/dashboard/services"

export default function useUpload(columnId: number, defaultImage?: string) {
  const [uploadedImage, setUploadedImage] = useState("")
  const [previewImageUrl, setPreviewImageUrl] = useState(defaultImage || "")
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleUpload: ChangeEventHandler<HTMLInputElement> = async (event) => {
    const selectedImage = event.target.files![0]
    if (!selectedImage) return

    const formData = new FormData()
    formData.append("image", selectedImage)

    setIsLoading(true)

    try {
      const result = await TaskCardApiInstance.cardImageUpload(columnId, formData)
      previewImage(selectedImage, (data) => {
        setUploadedImage(result.imageUrl)
        setPreviewImageUrl(data.target?.result as string)
      })
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setHasError(true)
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    hasError,
    uploadedImage,
    previewImageUrl,
    handleUpload,
  }
}
