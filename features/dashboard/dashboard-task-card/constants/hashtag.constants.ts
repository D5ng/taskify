import { Color, Colors } from "@features/dashboard/dashboard-task-card/types"

export const HASHTAG_COLORS_CONFIG: Record<Color, Colors> = Object.freeze({
  green: {
    color: "#7AC555",
    background: "#F5FAF2",
  },
  purple: {
    color: "#760DDE",
    background: "#F4ECFC",
  },
  orange: {
    color: "#FFA500",
    background: "#FFF8EB",
  },
  blue: {
    color: "#76A5EA",
    background: "#F4F8FD",
  },
  pink: {
    color: "#E876EA",
    background: "#FDF4FD",
  },
})

export const HASHTAG_COLORS = Object.keys(HASHTAG_COLORS_CONFIG) as Color[]
