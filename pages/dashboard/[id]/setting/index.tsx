import { GetServerSideProps, InferGetStaticPropsType } from "next"
import { axiosInstance } from "@/config"
import { Meta } from "@common/components"
import {
  DashboardSideBar,
  DashboardLayout,
  DashboardSectionLayout,
  DashboardDetailHeader,
} from "@shared/dashboard/components"
import { GoBack } from "@common/components/go-back"
import { DashboardApiInstance, MemberApiInstance } from "@shared/dashboard/services"
import { DashboardEdit } from "@features/dashboard/dashboard-edit/components"
import { DashboardMember } from "@features/dashboard/dashboard-members/components"
import { DashboardDeleteButton } from "@features/dashboard/dashboard-delete/components"
import { DashboardInvite } from "@features/dashboard/dashboard-invite/components"

export default function Edit(props: InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <>
      <Meta title={`${props.dashboard.title} - 대시보드 설정`} />
      <DashboardDetailHeader dashboard={props.dashboard} members={props.members} />
      <DashboardLayout>
        <GoBack />
        <DashboardSectionLayout>
          <DashboardEdit dashboard={props.dashboard} />
        </DashboardSectionLayout>
        <DashboardSectionLayout layout="members">
          <DashboardMember dashboard={props.dashboard} />
        </DashboardSectionLayout>
        <DashboardSectionLayout layout="invitation">
          <DashboardInvite dashboard={props.dashboard} />
        </DashboardSectionLayout>
        <DashboardDeleteButton />
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
