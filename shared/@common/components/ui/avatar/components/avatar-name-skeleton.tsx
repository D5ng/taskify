import React from "react"
import classes from "./avatar-name-skeleton.module.css"

export default function AvatarNameSkeleton() {
  return <span className={`${classes["profile-name"]} skeleton`}></span>
}
