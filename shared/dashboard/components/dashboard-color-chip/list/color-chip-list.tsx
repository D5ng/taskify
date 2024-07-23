import { COLOR_CHIPS } from "@shared/dashboard/constants"
import { ColorChipsProps } from "@shared/dashboard/types"
import ColorChipItem from "../list-item/color-chip-item"
import classes from "./color-chip-list.module.css"

export default function ColorChipList(props: ColorChipsProps) {
  return (
    <ul className={classes["color-chips"]}>
      {COLOR_CHIPS.map((color) => (
        <ColorChipItem key={color} color={color} {...props} />
      ))}
    </ul>
  )
}
