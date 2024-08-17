import Image from "next/image"
import { useDropdownContext } from "../dropdown"
import classes from "../dropdown.module.css"

export default function DropdownKebab() {
  const dropdownContext = useDropdownContext()
  return (
    <button className={classes.kebab} onClick={dropdownContext.onOpenToggle}>
      <Image src="/images/icons/kebab-icon.svg" alt="메뉴 더 보기" fill />
    </button>
  )
}
