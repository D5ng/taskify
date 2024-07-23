import { axiosInstance } from "config"
import { MyReceivedInvitationResponse } from "@shared/dashboard/types"

class InviteAPI {
  async fetchMyInvitation(currentPage: number) {
    return (await axiosInstance.get<MyReceivedInvitationResponse>(`invitations?page=${currentPage}size=5`)).data
  }

  async invitationResponse(url: string, { arg }: { arg: { inviteAccepted: boolean } }) {
    return await axiosInstance.put(url, arg)
  }
}

const InviteApiInstance = new InviteAPI()

export default InviteApiInstance
