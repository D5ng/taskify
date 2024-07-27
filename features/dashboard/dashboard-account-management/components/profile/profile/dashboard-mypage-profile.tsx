import React from "react"
import { useFetchProfile } from "@common/hooks"
import Suspensive from "@common/components/suspensive"
import DashboardMyPageProfileSkeleton from "../profile-skeleton/dashboard-mypage-profile-skeleton"
import DashboardMyPageProfileForm from "../profile-form/dashboard-mypage-profile-form"

export default function DashboardMyPageProfile() {
  const profileQuery = useFetchProfile()

  return (
    <Suspensive isLoading={profileQuery.isLoading} fallback={<DashboardMyPageProfileSkeleton />}>
      <DashboardMyPageProfileForm />
    </Suspensive>
  )
}
