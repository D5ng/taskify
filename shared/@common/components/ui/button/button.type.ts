import { ButtonHTMLAttributes, PropsWithChildren, CSSProperties } from "react"

export interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large" | "auth" | "modal" | "none"
  buttonStyle: "outline" | "primary" | "secondary"
  customStyle?: CSSProperties
  fontColor?: "black"
  isDisabled?: boolean
  isLoading?: boolean
  iconUrl?: string
  onClick?: () => void
}

export interface ButtonLinkProps extends PropsWithChildren {
  size?: "small" | "medium" | "large" | "auth" | "modal" | "none"
  fontColor?: "black"
  buttonStyle: "outline" | "primary" | "secondary"
  customStyle?: CSSProperties
  href: string
  iconUrl?: string
}
