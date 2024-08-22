import { axiosInstance } from "@/config"
import type { DashboardData, Dashboard, DashboardResponse, InviteData, InviteResponse } from "@shared/dashboard/types"
import axios, { AxiosError, isAxiosError } from "axios"

class DashboardAPI {
  async fetchDashboard(page: number) {
    return (await axiosInstance.get<DashboardResponse>(`dashboards?navigationMethod=pagination&page=${page}&size=5`))
      .data
  }

  async createDashbaord(url: string, { arg }: { arg: DashboardData }) {
    return await axiosInstance.post(url, arg)
  }

  async fetchDashboardDetail(dashboardId: number) {
    return (await axiosInstance.get<Dashboard>(`dashboards/${dashboardId}`)).data
  }

  async updateDashboard(url: string, { arg }: { arg: DashboardData }) {
    return await axiosInstance.put(url, arg)
  }

  async deleteDashboard(url: string) {
    return await axiosInstance.delete(url)
  }

  async dashboardInvite(url: string, { arg }: { arg: InviteData }) {
    return await axiosInstance.post(url, arg)
  }

  async fetchInvitation(url: string) {
    return (await axiosInstance.get<InviteResponse>(url)).data
  }

  async deleteInvitation(url: string) {
    return await axiosInstance.delete(url)
  }
}

const DashboardApiInstance = new DashboardAPI()

export default DashboardApiInstance
