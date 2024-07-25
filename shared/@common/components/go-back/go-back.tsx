import Image from "next/image"
import ArrowRight from "@/public/images/icons/arrow-right.svg"
import classes from "./go-back.module.css"
import useGoBack from "@/hooks/use-go-back"

export default function GoBack() {
  const handleGoBack = useGoBack()

  return (
    <button className={classes.layout} onClick={handleGoBack}>
      <div className={classes["image-wrapper"]}>
        <Image src={ArrowRight} alt="" fill />
      </div>
      <span className={classes.text}>돌아가기</span>
    </button>
  )
}
