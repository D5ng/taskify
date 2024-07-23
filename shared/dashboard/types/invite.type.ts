export interface MyReceivedInvitationResponse {
  cursorId: number
  invitations: MyReceivedInvitation[]
}

export interface MyReceivedInvitation {
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
