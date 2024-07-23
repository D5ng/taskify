import { GetServerSideProps, InferGetStaticPropsType } from "next"
import { axiosInstance } from "@/config"
import { DashboardLayout, DashboardHeader, DashboardSideBar } from "@shared/dashboard/components"

import { DashboardApiInstance, MemberApiInstance } from "@shared/dashboard/services"
import { DashboardColumn } from "@/features/dashboard-detail/dashboard-column/components"

import { useMemberStore } from "@/shared/dashboard/hooks"

export default function DashboardDetailPage(props: InferGetStaticPropsType<typeof getServerSideProps>) {
  const setMembers = useMemberStore.use.setMembers()
  setMembers(props.members || [])
  return (
    <>
      <DashboardHeader title={props.title} members={props.members} />
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
    const members = await MemberApiInstance.getMembers(`members?dashboardId=${dashboardId}`)

    return {
      props: {
        id: dashboard.id,
        title: dashboard.title,
        members: members.members,
      },
    }
  } catch (error) {
    return {
      props: {},
      notFound: true,
    }
  }
}) satisfies GetServerSideProps
