/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 15 configurations
  reactStrictMode: true,
  // Use Turbopack for faster dev builds (Next.js 15 feature)
  experimental: {
    turbo: {
      resolveAlias: {
        // Add any aliases if needed
      }
    }
  }
}

module.exports = nextConfig
