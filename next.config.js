/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blvckleg.github.io",
        
        pathname: '/portfolio',
      },
    ],
  },
};

module.exports = nextConfig;
