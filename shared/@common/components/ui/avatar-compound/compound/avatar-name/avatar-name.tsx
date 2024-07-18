import React from "react"
import classes from "./avatar-name.module.css"
import { useAvatarContext } from "../../avatar"
import AvatarNameSkeleton from "../../skeleton/avatar-name-skeleton"

export default function AvatarName() {
  const avatarContext = useAvatarContext()

  if (!avatarContext.nickname) return <AvatarNameSkeleton />

  return <span className={classes["profile-name"]}>{avatarContext.nickname}</span>
}
