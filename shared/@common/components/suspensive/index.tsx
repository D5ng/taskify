import React, { PropsWithChildren } from "react"
import { Loading } from "@common/components/ui/loading"

interface Props extends PropsWithChildren {
  fallback?: JSX.Element
  isLoading: boolean
}

export default function Suspensive(props: Props) {
  if (props.isLoading) return props.fallback || <Loading />

  return props.children
}
