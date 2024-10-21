import React, { useEffect, useState } from "react"

export default function useClient() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    if (typeof window === undefined) return
    setIsClient(true)
  }, [])

  return isClient
}
