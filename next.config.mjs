const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '')

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
}

export default nextConfig
