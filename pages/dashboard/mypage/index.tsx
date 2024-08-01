import {
  DashboardMyPagePassword,
  DashboardMyPageProfile,
} from "@features/dashboard/dashboard-account-management/components"
import { GoBack } from "@/shared/@common/components/go-back"
import {
  DashboardHeader,
  DashboardLayout,
  DashboardSectionLayout,
  DashboardSideBar,
} from "@/shared/dashboard/components"
import { axiosInstance } from "@/config"
import { AuthApiInstance } from "@/shared/@common/services"
import { GetServerSideProps, InferGetStaticPropsType } from "next"

export default function MyPage(props: InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <>
      <DashboardHeader user={props.user} />
      <DashboardLayout>
        <GoBack />
        <DashboardSectionLayout>
          <DashboardMyPageProfile />
        </DashboardSectionLayout>
        <DashboardSectionLayout>
          <DashboardMyPagePassword />
        </DashboardSectionLayout>
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
