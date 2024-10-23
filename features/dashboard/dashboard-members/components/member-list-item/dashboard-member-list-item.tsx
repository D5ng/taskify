import { Avatar, Button } from "@common/components/ui"
import type { Member } from "@shared/dashboard/types"
import { useRouterQuery } from "@shared/@common/hooks"
import { useDeleteMember, useMemberPageStore } from "@shared/dashboard/hooks"
import classes from "./dashboard-member-list-item.module.css"

interface Props extends Member {
  dashboardUserId: number
  isCreatedDashboardUser: boolean
}

export default function DashboardMemberListItem(props: Props) {
  const dashboardId = +useRouterQuery("id")
  const currentPage = useMemberPageStore.use.currentPage()
  const deleteMemberMutation = useDeleteMember(dashboardId, currentPage, props.id)
  const isAdmin = props.userId === props.dashboardUserId

  const handleDeleteMember = async () => {
    if (isAdmin) return
    await deleteMemberMutation.trigger()
  }

  return (
    <div className={classes["list-layout"]}>
      <div className={classes["list-layout__profile"]}>
        <Avatar nickname={props.nickname} image={props.profileImageUrl}>
          <Avatar.Image />
          <Avatar.Name />
        </Avatar>
      </div>
      {props.isCreatedDashboardUser && (
        <div>
          <Button
            buttonStyle="secondary"
            size="small"
            isLoading={deleteMemberMutation.isMutating}
            disabled={isAdmin}
            onClick={handleDeleteMember}
          >
            {isAdmin ? "방장" : "삭제"}
          </Button>
        </div>
      )}
    </div>
  )
}
