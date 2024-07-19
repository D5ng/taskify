import { useDropdownContext } from "@common/components/ui/dropdown"

interface DropdownTriggerType {
  children: React.ReactNode
}

export default function DropdownTrigger(props: DropdownTriggerType) {
  const dropdownContext = useDropdownContext()
  return (
    <>
      <button onClick={dropdownContext.onOpenToggle}>{props.children}</button>
    </>
  )
}