import React from "react"
import Image from "next/image"
import { useAvatarContext } from "../avatar"
import classes from "../avatar.module.css"

interface AvatarImageProps {
  type?: "task" | "header"
}

export default function AvatarImage(props: AvatarImageProps) {
  const avatarContext = useAvatarContext()
  const className = `${classes[props.type || "header"]} ${classes["avatar-image"]} ${
    !avatarContext.image ? classes["avatar-initial"] : ""
  }`

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
