export interface Comment {
  id: number
  content: string
  createdAt: string
  updatedAt: string
  cardId: number
  author: {
    profileImageUrl: string
    nickname: string
    id: number
  }
}

export interface Comments {
  cursorId: 0
  comments: Comment[]
}

export interface CreateComment {
  content: string
  cardId: number
  columnId: number
  dashboardId: number
}

export interface CommentData {
  content: string
}
