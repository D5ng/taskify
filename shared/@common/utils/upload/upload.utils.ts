export function previewImage(selectedImage: File, callback: (data: ProgressEvent<FileReader>) => void) {
  const fileReader = new FileReader()
  fileReader.readAsDataURL(selectedImage)
  fileReader.onload = (data) => callback(data)
}
