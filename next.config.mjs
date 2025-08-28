/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      formats: ['image/avif', 'image/webp'], // Prefer modern formats
      minimumCacheTTL: 31536000, // Cache images for 1 year
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Breakpoints
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Smaller image sizes
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.paradane.com",
          port: "",
          pathname: "/**",
        },
      ],
    },
    experimental: {
        inlineCss: true,
        useLightningcss: true,
        useCache: true,
    },
  }

export default nextConfig;
