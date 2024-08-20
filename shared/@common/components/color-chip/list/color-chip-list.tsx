import { COLOR_CHIPS } from "@common/constants"
import type { ColorChipColor } from "@common/types"
import ColorChipItem from "../list-item/color-chip-item"
import classes from "./color-chip-list.module.css"

interface Props {
  onChange: (value: ColorChipColor) => void
  value: ColorChipColor
}

export default function ColorChipList(props: Props) {
  return (
    <ul className={classes["color-chips"]}>
      {COLOR_CHIPS.map((color) => (
        <ColorChipItem key={color} color={color} {...props} />
      ))}
    </ul>
  )
}
