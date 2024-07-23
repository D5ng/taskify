import { ColorChipItemProps } from "@shared/dashboard/types"
import { COLOR_CHIPS_NAME } from "@shared/dashboard/constants"
import SelectedColorChip from "../selected/selected-color-chip"
import classes from "./color-chip-item.module.css"

export default function ColorChipItem(props: ColorChipItemProps) {
  const styles = { backgroundColor: props.color }

  return (
    <li className={classes["color-chip-item"]}>
      <button
        type="button"
        className={classes["color-chiop-item__button"]}
        style={styles}
        onClick={props.handleSelectedColorChip!.bind(null, props.color)}
        name={COLOR_CHIPS_NAME[props.color]}
      >
        {props.selectedColorChip === props.color && <SelectedColorChip />}
      </button>
    </li>
  )
}
