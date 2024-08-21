import { useState } from "react"
import { Status } from "@common/components"
import { FormControl, Dropdown } from "@common/components/ui"
import type { DashboardColumn, Member } from "@/shared/dashboard/types"
import classes from "./form-control-status.module.css"

interface Props {
  onChange: (assigneeUserId: number) => void
  hasError: (field: string) => string
  columns: DashboardColumn[]
  columnId: number
  className: string
}

export default function FormControlStatus({ columns, onChange, hasError, columnId, ...props }: Props) {
  const initialStatus = columns.find((column) => column.id === columnId)

  if (!initialStatus) throw new Error("컬럼 에러가 발생했어요.")

  const [selectedStatus, setSelectedStatus] = useState<DashboardColumn>(initialStatus)
  const handleSelectedManager = (column: DashboardColumn) => {
    setSelectedStatus(column)
    onChange(column.id)
    console.log(column.id)
  }

  return (
    <FormControl type="modal" id="task-manager" hasError={hasError} className={props.className}>
      <FormControl.Label>상태</FormControl.Label>
      <Dropdown className="dropdown-layout-medium">
        <Dropdown.Trigger>
          <Dropdown.Select>
            <Status title={selectedStatus.title} />
          </Dropdown.Select>
        </Dropdown.Trigger>
        <Dropdown.Menu size="inherit">
          {columns.map((column) => (
            <Dropdown.MenuItem key={column.id} onClick={handleSelectedManager.bind(null, column)}>
              <Status title={column.title} />
            </Dropdown.MenuItem>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </FormControl>
  )
}
