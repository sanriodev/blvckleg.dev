/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: 'https://blvckleg.github.io/portfolio',
  images: {
    path: '/portfolio',
    unoptimized: true,
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "blvckleg.github.io",
        
  //       pathname: '/portfolio',
  //     },
  //   ],
  },
};

module.exports = nextConfig;
