import { ColorChipColor } from "@common/types"
import { COLOR_CHIPS_NAME } from "@shared/dashboard/constants"
import SelectedColorChip from "../selected/selected-color-chip"
import classes from "./color-chip-item.module.css"

interface Props {
  onChange: (value: ColorChipColor) => void
  value: ColorChipColor
  color: ColorChipColor
}

export default function ColorChipItem(props: Props) {
  const styles = { backgroundColor: props.color }

  return (
    <li className={classes["color-chip-item"]}>
      <button
        type="button"
        className={classes["color-chiop-item__button"]}
        style={styles}
        onClick={props.onChange!.bind(null, props.color)}
        name={COLOR_CHIPS_NAME[props.color]}
      >
        {props.value === props.color && <SelectedColorChip />}
      </button>
    </li>
  )
}
