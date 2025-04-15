import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'computing.psu.ac.th',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'icons.veryicon.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.thenounproject.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
