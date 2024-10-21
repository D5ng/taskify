import { useEffect, useState } from "react"
import useClient from "./use-client"

export default function useDeviceResize() {
  const isClient = useClient()
  const [width, setWidth] = useState(isClient ? window.innerWidth : 1920)

  useEffect(() => {
    if (!isClient) return
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [isClient])

  return {
    width,
    isTablet: width < 1400,
    isMobile: width < 767,
  }
}
