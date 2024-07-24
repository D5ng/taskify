import { useState } from "react"

export default function useSelect<T>(initialState: T) {
  const [selectedItem, setSelectedItem] = useState<T>(initialState)
  const onSelectedItem = (selectedItem: T) => setSelectedItem(selectedItem)
  const onResetSelectedItem = () => setSelectedItem(initialState)

  return {
    selectedItem,
    onSelectedItem,
    onResetSelectedItem,
  }
}
