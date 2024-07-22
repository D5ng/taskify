import { useState } from "react"

export default function useColorChipSelect<T>(initialState: T) {
  const [selectedColorChip, setSelectedColorChip] = useState<T>(initialState)
  const handleSelectedColorChip = (selectedColor: T) => setSelectedColorChip(selectedColor)
  const handleResetColorChip = () => setSelectedColorChip(initialState)

  return {
    selectedColorChip,
    handleSelectedColorChip,
    handleResetColorChip,
  }
}
