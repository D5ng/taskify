import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <body>
        <div id="backdrop"></div>
        <div id="modal"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
