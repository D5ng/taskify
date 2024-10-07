import { useDebounce } from "@common/hooks"
import { useSearchInvitedDashboard } from "@shared/dashboard/hooks"

export default function useSearchInvited(searchValue: string) {
  const debounceValue = useDebounce(searchValue, 300)
  const { data: searchInviteData, isLoading: searchInviteLoading } = useSearchInvitedDashboard(debounceValue)
  const isSearchResult = !!(searchValue && searchInviteData?.invitations.length)
  const searchEmptyResult = !!(searchValue && !searchInviteData?.invitations.length && !searchInviteLoading)

  return {
    searchInviteData,
    searchInviteLoading,
    isSearchResult,
    searchEmptyResult,
  }
}
