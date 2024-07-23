import React from "react"
import classes from "./avatar-image-skeleton.module.css"

interface Props {
  size?: "small" | "medium"
}

export default function AvatarImageSkeleton(props: Props) {
  const className = `${classes["profile-image"]} skeleton ${classes[props.size || "small"]}`
  return <div className={className}></div>
}
