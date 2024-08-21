import { axiosInstance } from "config"
import { InvitedDashboardResponse } from "@shared/dashboard/types"

class InvitedDashboardAPI {
  async fetchInvitedDashboard(url: string) {
    return (await axiosInstance.get<InvitedDashboardResponse>(url)).data
  }

  async updateInvitedDashboard(url: string, { arg }: { arg: { inviteAccepted: boolean } }) {
    return await axiosInstance.put(url, arg)
  }
}

const InvitedDashboardInstance = new InvitedDashboardAPI()

export default InvitedDashboardInstance
