import Image from "next/image"
import classes from "./auth-header.module.css"

export default function AuthHeader() {
  return (
    <>
      <Image
        src="images/logo/logo-with-title-big.svg"
        alt="테스키파이"
        width="0"
        height="0"
        priority
        className={classes["image-wrapper"]}
      />
      <p className={classes["form-info"]}>첫 방문을 환영합니다!</p>
    </>
  )
}
