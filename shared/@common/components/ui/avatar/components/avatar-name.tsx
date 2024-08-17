import React from "react"
import { useAvatarContext } from "../avatar"
import classes from "../avatar.module.css"

export default function AvatarName() {
  const avatarContext = useAvatarContext()

  return <span className={classes["avatar-name"]}>{avatarContext.nickname}</span>
}
