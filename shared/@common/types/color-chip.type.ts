export type ColorChipColor = "#7AC555" | "#760DDE" | "#FFA500" | "#76A5EA" | "#E876EA"

export type ColorChipColors = ColorChipColor[]

export interface ColorChipsProps {
  selectedColorChip: ColorChipColor
  handleSelectedColorChip: (selectedColor: ColorChipColor) => void
}

export interface ColorChipItemProps extends ColorChipsProps {
  color: ColorChipColor
}
