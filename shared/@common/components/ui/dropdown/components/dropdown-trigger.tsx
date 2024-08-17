import { useDropdownContext } from "../dropdown"

interface DropdownTriggerType {
  children: React.ReactNode
}

export default function DropdownTrigger(props: DropdownTriggerType) {
  const dropdownContext = useDropdownContext()

  return (
    <button
      onClick={dropdownContext.isToggle ? dropdownContext.onCloseToggle : dropdownContext.onOpenToggle}
      type="button"
    >
      {props.children}
    </button>
  )
}
