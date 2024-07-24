import type { ColorChipColor } from "@common/types"

export interface Dashboard {
  id: number
  title: string
  color: string
  createdAt: string
  updatedAt: string
  createdByMe: boolean
  userId: number
}

export interface DashboardData {
  title: string
  color: ColorChipColor
}

export interface DashboardResponse {
  cursorId: number
  totalCount: number
  dashboards: Dashboard[]
}

export interface InviteResponse {
  totalCount: number
  invitations: Invite[]
}

export interface Invite {
  id: number
  inviter: {
    nickname: string
    email: string
    id: number
  }
  teamId: string
  dashboard: {
    title: string
    id: number
  }
  invitee: {
    nickname: string
    email: string
    id: number
  }
  inviteAccepted: boolean
  createdAt: string
  updatedAt: string
}

export interface InviteData {
  email: string
}
