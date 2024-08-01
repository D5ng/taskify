import { GetServerSideProps, InferGetStaticPropsType } from "next"
import { axiosInstance } from "@/config"
import { DashboardLayout, DashboardHeader, DashboardSideBar } from "@shared/dashboard/components"
import { DashboardList } from "@features/dashboard/dashboard-list/components"
import { AuthApiInstance } from "@common/services"

export default function MyDashboard(props: InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <>
      <DashboardHeader user={props.user} />
      <DashboardLayout>
        <DashboardList />
      </DashboardLayout>
      <DashboardSideBar />
    </>
  )
}

export const getServerSideProps = (async (context) => {
  const cookie = context.req.cookies.token!
  const token = JSON.parse(cookie).accessToken

  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`

  try {
    const user = await AuthApiInstance.fetchProfile(`users/me`)

    return {
      props: {
        user,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}) satisfies GetServerSideProps
