import { axiosInstance } from "@/config"
import { Comments, CreateComment, CommentData } from "@shared/dashboard/types"

class CommentAPI {
  async getComments(url: string) {
    return (await axiosInstance.get<Comments>(url)).data
  }

  async createComment(url: string, { arg }: { arg: CreateComment }) {
    return await axiosInstance.post(url, arg)
  }

  async updateComment(url: string, { arg }: { arg: CommentData }) {
    return await axiosInstance.put(url, arg)
  }

  async deleteComment(url: string) {
    return await axiosInstance.delete(url)
  }
}

const CommentApiInstance = new CommentAPI()

export default CommentApiInstance
