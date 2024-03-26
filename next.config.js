/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blvckleg.github.io",
        pathname: '/portfolio/**',
      },
    ],
  },
};

module.exports = nextConfig;
