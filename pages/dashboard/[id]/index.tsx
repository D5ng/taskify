import { GetServerSideProps, InferGetStaticPropsType } from "next"
import { axiosInstance } from "@/config"
import { DashboardLayout, DashboardHeader, DashboardSideBar } from "@shared/dashboard/components"

import { DashboardApiInstance, MemberApiInstance } from "@shared/dashboard/services"
import { DashboardColumn } from "@features/dashboard/dashboard-column/components"

import { useMemberStore } from "@/shared/dashboard/hooks"
import { AuthApiInstance } from "@/shared/@common/services"

export default function DashboardDetailPage(props: InferGetStaticPropsType<typeof getServerSideProps>) {
  const setMembers = useMemberStore.use.setMembers()
  setMembers(props.members || [])
  return (
    <>
      <DashboardHeader dashboard={props.dashboard} members={props.members} user={props.user} />
      <DashboardLayout>
        <DashboardColumn />
      </DashboardLayout>
      <DashboardSideBar />
    </>
  )
}

export const getServerSideProps = (async (context) => {
  const cookie = context.req.cookies.token!
  const token = JSON.parse(cookie).accessToken
  const dashboardId = context.params!.id

  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`

  try {
    const dashboard = await DashboardApiInstance.fetchDashboardDetail(+dashboardId!)
    const members = (await MemberApiInstance.getMembers(`members?dashboardId=${dashboardId}`)).members
    const user = await AuthApiInstance.fetchProfile(`users/me`)

    return {
      props: {
        dashboard,
        members: members,
        user,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}) satisfies GetServerSideProps
