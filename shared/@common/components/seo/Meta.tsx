import Head from "next/head"

interface MetaProps {
  title: string
  description?: string
}

export default function Meta({ title, description }: MetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description || "스마트하게 나의 일정을 관리해보자!"} />
      <meta name="author" content="DongHyun Lee" />
      <meta property="og:title" content={description || "스마트하게 나의 일정을 관리해보자!"} />
      <meta property="og:description" content={description || "스마트하게 나의 일정을 관리해보자!"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta property="og:image" content="/images/landing/section-first.png" />
      <meta property="og:image:alt" content={description || "스마트하게 나의 일정을 관리해보자!"} />
      <meta property="og:locale" content="ko_KR" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="테스키파이" />
      <meta name="twitter:description" content={description || "스마트하게 나의 일정을 관리해보자!"} />
      <meta name="twitter:image" content="/images/landing/section-first.png" />
      <meta name="twitter:image:alt" content={description || "스마트하게 나의 일정을 관리해보자!"} />
    </Head>
  )
}
