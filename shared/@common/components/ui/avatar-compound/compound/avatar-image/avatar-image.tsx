import React from "react"
import Image from "next/image"
import classes from "./avatar-image.module.css"
import { useAvatarContext } from "../avatar"

interface AvatarImageProps {
  type?: "task" | "header"
}

export default function AvatarImage(props: AvatarImageProps) {
  const avatarContext = useAvatarContext()
  const className = `${classes[props.type || "header"]} ${classes["profile-image"]} ${!avatarContext.image ? classes["profile-initial"] : ""}`

  return (
    <div className={className}>
      {avatarContext.image ? (
        <Image src={avatarContext.image} alt="프로필 이미지" fill />
      ) : (
        <span>{avatarContext.nickname.slice(0, 1)}</span>
      )}
    </div>
  )
}
