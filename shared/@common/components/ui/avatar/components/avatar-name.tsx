import React from "react"
import classes from "./avatar-name.module.css"
import { useAvatarContext } from ".."

export default function AvatarName() {
  const avatarContext = useAvatarContext()

  return <span className={classes["profile-name"]}>{avatarContext.nickname}</span>
}
