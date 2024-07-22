import React from "react"
import classes from "../index.module.css"
import { useAvatarContext } from ".."

export default function AvatarName() {
  const avatarContext = useAvatarContext()

  return <span className={classes["avatar-name"]}>{avatarContext.nickname}</span>
}
