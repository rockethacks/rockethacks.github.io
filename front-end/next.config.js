/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/rockethacks.github.io',
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;