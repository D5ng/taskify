// import React from "react"
// import useToggle from "@/hooks/use-toggle"
// import Dropdown from "@/shared/common/components/ui/dropdown-compound/dropdown"
// import classes from "./modal.module.css"
// import { useDeleteTaskCard } from "@features/dashboard/dashboard-task-card/hooks"
// import { TaskCard } from "@features/dashboard/dashboard-task-card/types"

// interface Props extends TaskCard {
//   onCloseModal: () => void
//   onUpdateModal: () => void
// }

// export default function Kebab(props: Props) {
//   const { isToggle, handleOpenToggle, handleCloseToggle } = useToggle()

//   const deleteCardMutation = useDeleteTaskCard(props.columnId, props.id)
//   const handleDeleteCard = async () => await deleteCardMutation.trigger()

//   return (
//     <>
//       <Dropdown
//         isToggle={isToggle}
//         className={classes.kebab}
//         onOpenToggle={handleOpenToggle}
//         onCloseToggle={handleCloseToggle}
//       >
//         <Dropdown.Kebab />
//         <Dropdown.Menu>
//           <Dropdown.MenuItem onClick={props.onUpdateModal}>수정하기</Dropdown.MenuItem>
//           <Dropdown.MenuItem onClick={handleDeleteCard}>삭제하기</Dropdown.MenuItem>
//         </Dropdown.Menu>
//       </Dropdown>
//     </>
//   )
// }

import Image from "next/image"
import classes from "../index.module.css"

export default function Kebab() {
  return (
    <div className={classes.kebab}>
      <Image src="/images/icons/kebab-icon.svg" alt="메뉴 더 보기" fill />
    </div>
  )
}
