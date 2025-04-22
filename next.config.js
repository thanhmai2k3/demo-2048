/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  basePath: isProd ? '/demo-2048' : '',

  output: "export",
  // reactStrictMode: true,
  distDir: 'dist',
  images: {
    unoptimized: true,
  },

};

module.exports = nextConfig;
