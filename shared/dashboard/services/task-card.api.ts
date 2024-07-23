import { axiosInstance } from "@/config"
import { CreateTaskCard, TaskCardResponse, UploadResponse } from "@shared/dashboard/types"

class TaskCardAPI {
  async getTaskCards(url: string) {
    return (await axiosInstance.get<TaskCardResponse>(url)).data
  }

  async createTaskCard(url: string, { arg }: { arg: CreateTaskCard }) {
    return await axiosInstance.post(url, arg)
  }

  async deleteTaskCard(url: string) {
    return await axiosInstance.delete(url)
  }

  async updateTaskCard(url: string, { arg }: { arg: CreateTaskCard }) {
    return await axiosInstance.put(url, arg)
  }

  async cardImageUpload(columnId: number, data: FormData) {
    return (await axiosInstance.post<UploadResponse>(`columns/${columnId}/card-image`, data)).data
  }
}

const TaskCardApiInstance = new TaskCardAPI()

export default TaskCardApiInstance
