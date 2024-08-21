import Image from "next/image"
import InviteEmptyIcon from "@/public/images/icons/invite-empty.svg"
import classes from "./dashboard-invited-empty.module.css"

export default function DashboardInvitedEmpty() {
  return (
    <div className={classes["invite-empty"]}>
      <div className={classes["image-wrapper"]}>
        <Image src={InviteEmptyIcon} alt="" fill priority={true} />
      </div>
      <p className={classes["empty-message"]}>아직 초대받은 대시보드가 없어요</p>
    </div>
  )
}
