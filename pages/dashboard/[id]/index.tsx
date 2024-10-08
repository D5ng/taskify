import { GetServerSideProps, InferGetStaticPropsType } from "next"
import { axiosInstance } from "@/config"
import { Meta } from "@common/components"
import { DashboardLayout, DashboardSideBar, DashboardDetailHeader, ErrorBoundary } from "@shared/dashboard/components"

import { DashboardApiInstance, MemberApiInstance } from "@shared/dashboard/services"
import { ColumnErrorFallback, DashboardColumn } from "@features/dashboard/dashboard-column/components"
import { useMemberStore } from "@/shared/dashboard/hooks"

export default function DashboardDetailPage(props: InferGetStaticPropsType<typeof getServerSideProps>) {
  const setMembers = useMemberStore.use.setMembers()
  setMembers(props.members)
  return (
    <>
      <Meta title={`${props.dashboard.title} - 대시보드`} />
      <DashboardDetailHeader dashboard={props.dashboard} members={props.members} />
      <DashboardLayout>
        <ErrorBoundary fallback={ColumnErrorFallback} onReset={() => {}}>
          <DashboardColumn />
        </ErrorBoundary>
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
    const [dashboard, members] = await Promise.all([
      DashboardApiInstance.fetchDashboardDetail(+dashboardId!),
      MemberApiInstance.getMembers(`members?dashboardId=${dashboardId}`),
    ])

    return {
      props: {
        dashboard: dashboard,
        members: members.members,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}) satisfies GetServerSideProps
