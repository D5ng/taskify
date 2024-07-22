import Image from "next/image"
import classes from "./selected-color-chip.module.css"

export default function SelectedColorChip() {
  return (
    <div className={classes["color-chip-item__selected"]}>
      <Image src="/images/icons/check-icon.svg" alt="색상 선택 완료" fill />
    </div>
  )
}
