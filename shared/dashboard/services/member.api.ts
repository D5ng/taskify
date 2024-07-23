import { axiosInstance } from "@/config"
import { MemberResponse } from "@shared/dashboard/types"

class MemberAPI {
  async getMembers(url: string) {
    return (await axiosInstance.get<MemberResponse>(url)).data
  }

  async deleteMembers(url: string) {
    return (await axiosInstance.delete(url)).data
  }
}

const MemberApiInstance = new MemberAPI()

export default MemberApiInstance
