export interface DashboardColumn {
  id: number
  title: string
  teamId: string
  createdAt: string
  updatedAt: string
}

export interface DashboardColumnResponse {
  result: string
  data: DashboardColumn[]
}

export interface UpdateDashboardColumn {
  title: string
}

export interface CreateDashboardColumn {
  title: string
  dashboardId: number
}
