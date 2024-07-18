import { PropsWithChildren, createContext, useContext } from "react"
import { AvatarName, AvatarImage } from "./compound"
import { AvatarContextType } from "./avatar.type"

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
  return <AvatarContext.Provider value={{ ...props }}>{props.children}</AvatarContext.Provider>
}

Avatar.Name = AvatarName
Avatar.Image = AvatarImage
