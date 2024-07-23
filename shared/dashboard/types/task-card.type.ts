export interface CreateTaskCard {
  assigneeUserId: number
  dashboardId: number
  columnId: number
  title: string
  description: string
  dueDate: string
  tags: string[]
  imageUrl?: string
}

export interface TaskCardResponse {
  cursorId: number
  totalCount: number
  cards: TaskCard[]
}

export interface TaskCard {
  id: number
  title: string
  description: string
  tags: string[]
  dueDate: string
  assignee: {
    profileImageUrl: string
    nickname: string
    id: number
  }
  imageUrl: string
  teamId: string
  columnId: number
  createdAt: string
  updatedAt: string
}

export interface UploadResponse {
  imageUrl: string
}
