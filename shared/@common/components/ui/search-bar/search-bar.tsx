import React, { ChangeEventHandler, useState } from "react"
import classes from "./search-bar.module.css"

// 외부에서 상태 값 받아야함.

interface Props {
  value: string
  onChangeValue: (value: string) => void
}

export default function SearchBar(props: Props) {
  const [value, setValue] = useState("")
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => props.onChangeValue(event.target.value)

  // 입력한 검색에 따라 API 요청 (if 사용자가 0.3초 동안 입력이 없다면 API 요청)
  // 입력한 값에 따라 SearchBar Input이 변경 되어야함.

  return (
    <div className={classes.searchBar}>
      <input type="text" placeholder="검색" onChange={handleChange} value={props.value} />
    </div>
  )
}
