import Image from "next/image"
import SettingIcon from "@/public/images/icons/setting-icon.svg"
import { useToggle } from "@common/hooks"
import { DashboardColumn } from "@shared/dashboard/types"
import { DashboardColumnDeleteModal, DashboardColumnEditModal } from "@features/dashboard/dashboard-column/components"
import classes from "./dashboard-column-edit-button.module.css"

export default function DashboardColumnEditButton(props: Pick<DashboardColumn, "id" | "title">) {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()
  const { isToggle: isDeleteClick, onOpenToggle: onOpenDeleteModal, onCloseToggle: onCloseDeleteModal } = useToggle()

  return (
    <>
      {isDeleteClick && <DashboardColumnDeleteModal onCloseModal={onCloseDeleteModal} id={props.id} />}
      {isToggle && <DashboardColumnEditModal onNextModal={onOpenDeleteModal} onCloseModal={onCloseToggle} {...props} />}
      <button className={classes["column-header-edit-button"]} onClick={onOpenToggle}>
        <Image src={SettingIcon} alt="" fill />
      </button>
    </>
  )
}
