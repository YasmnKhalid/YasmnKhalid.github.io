/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Only export static files in production builds, allowing full dynamic functionality during 'npm run dev'
  ...(isProd ? { output: 'export' } : {}),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
