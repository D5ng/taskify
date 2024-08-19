import Image from "next/image"
import classes from "./kebab.module.css"

export default function Kebab() {
  return (
    <div className={classes.kebab}>
      <Image src="/images/icons/kebab-icon.svg" alt="메뉴 더 보기" fill />
    </div>
  )
}
