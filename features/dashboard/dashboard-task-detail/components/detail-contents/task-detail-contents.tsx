import Image from "next/image"
import { TaskCard } from "@shared/dashboard/types"
import classes from "./task-detail-contents.module.css"

export default function TaskDetailContents(props: Pick<TaskCard, "description" | "imageUrl">) {
  return (
    <div>
      <p className={classes.description}>{props.description}</p>
      {props.imageUrl && (
        <div className={classes["image-wrapper"]}>
          <Image src={props.imageUrl} alt="이미지 썸네일" width={0} height={260} sizes="100%" />
        </div>
      )}
    </div>
  )
}
