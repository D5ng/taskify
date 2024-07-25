import { PropsWithChildren } from "react"
import Image from "next/image"
import DropdownIcon from "@/public/images/icons/dropdown-icon.svg"
import { useDropdownContext } from ".."
import classes from "../index.module.css"

export default function Select(props: PropsWithChildren) {
  const dropdownContext = useDropdownContext()
  const statusClassName = dropdownContext.isToggle ? `${classes.status} ${classes["status-active"]}` : classes.status
  return (
    <div className={statusClassName}>
      {props.children}
      <div className={classes["status-icon"]}>
        <Image src={DropdownIcon} alt="목록 열기" fill />
      </div>
    </div>
  )
}
