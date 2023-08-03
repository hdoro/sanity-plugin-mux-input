/** @type {import('next').NextConfig} */
const nextConfig = {
  // We run these checks in the CI pipeline, so we don't need to run them on Vercel
  typescript: {ignoreBuildErrors: true},
  eslint: {ignoreDuringBuilds: true},
}

export default nextConfig
