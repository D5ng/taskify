import { ChangeEventHandler, useState } from "react"
import { AuthApiInstance } from "@common/services"
import { previewImage } from "@common/utils/upload"

export default function useProfileUpload() {
  const [uploadedImage, setUploadedImage] = useState("")
  const [previewImageUrl, setPreviewImageUrl] = useState("")
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleUpload: ChangeEventHandler<HTMLInputElement> = async (event) => {
    const selectedImage = event.target.files![0]
    if (!selectedImage) return

    const formData = new FormData()
    formData.append("image", selectedImage)

    setIsLoading(true)

    try {
      const result = await AuthApiInstance.profileImage(formData)
      previewImage(selectedImage, (data) => {
        setUploadedImage(result.profileImageUrl)
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
