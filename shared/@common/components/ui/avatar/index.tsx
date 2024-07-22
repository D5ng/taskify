import React, { PropsWithChildren, createContext, useContext } from "react"
import { AvatarName, AvatarImage } from "./components"
import { AvatarContextType } from "./index.type"
import classes from "./index.module.css"

export const AvatarContext = createContext<AvatarContextType>({
  nickname: "",
  image: "",
})

export function useAvatarContext() {
  const avatarContext = useContext(AvatarContext)
  if (!avatarContext) throw new Error("Avatar Context에서 사용해주세요.")
  return avatarContext
}

export default function Avatar(props: PropsWithChildren<AvatarContextType>) {
  return (
    <AvatarContext.Provider value={{ ...props }}>
      <div className={classes["avatar-layout"]}>{props.children}</div>
    </AvatarContext.Provider>
  )
}

Avatar.Name = AvatarName
Avatar.Image = AvatarImage
