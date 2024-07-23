import { axiosInstance } from "@/config"
import { DashboardColumnResponse, UpdateDashboardColumn } from "@shared/dashboard/types"

class DashboardColumnAPI {
  async fetchColumn(url: string) {
    return (await axiosInstance.get<DashboardColumnResponse>(url)).data
  }

  async updateColumn(url: string, { arg }: { arg: UpdateDashboardColumn }) {
    return await axiosInstance.put(url, arg)
  }

  async deleteColumn(url: string) {
    return await axiosInstance.delete(url)
  }
}

const DashboardColumnApiInstance = new DashboardColumnAPI()

export default DashboardColumnApiInstance
