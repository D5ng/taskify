import NextBundleAnalyzer from "@next/bundle-analyzer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
      },
    ],
  },
  reactStrictMode: false,
  swcMinify: true,
}

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: true,
  openAnalyzer: true,
})

export default withBundleAnalyzer(nextConfig)
