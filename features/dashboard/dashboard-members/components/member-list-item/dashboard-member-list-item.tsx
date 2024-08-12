import Avatar from "@/shared/@common/components/ui/avatar"
import { Button } from "@/shared/@common/components/ui/button"
import { Member } from "@/shared/dashboard/types"
import classes from "./dashboard-member-list-item.module.css"
import { useDeleteMember, useMemberPageStore } from "@/shared/dashboard/hooks"
import { useRouterQuery } from "@/shared/@common/hooks"

export default function DashboardMemberListItem(props: Member) {
  const dashboardId = +useRouterQuery("id")
  const currentPage = useMemberPageStore.use.currentPage()
  const deleteMemberMutation = useDeleteMember(dashboardId, currentPage, props.id)

  const handleDeleteMember = async () => {
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
      <div>
        <Button
          buttonStyle="secondary"
          size="small"
          isLoading={deleteMemberMutation.isMutating}
          isDisabled={deleteMemberMutation.isMutating}
          onClick={handleDeleteMember}
        >
          삭제
        </Button>
      </div>
    </div>
  )
}
