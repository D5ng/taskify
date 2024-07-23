import { HASHTAG_COLORS, HASHTAG_COLORS_CONFIG } from "@/features/dashboard-detail/dashboard-task-card/constants"

const getRandomIndex = (list: any[]) => Math.floor(Math.random() * list.length)

export function getRandomColor() {
  const randomIndex = getRandomIndex(HASHTAG_COLORS)
  const hashtagKey = HASHTAG_COLORS[randomIndex]
  return HASHTAG_COLORS_CONFIG[hashtagKey]
}
