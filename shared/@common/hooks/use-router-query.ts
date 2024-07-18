import { useRouter } from "next/router"

export default function useRouterQuery(queryValue: string) {
  const router = useRouter()
  const query = router.query[queryValue]

  if (!query) {
    throw new Error(`쿼리 값에 해당하는 ${queryValue}값이 없어요`)
  }

  return query
}
