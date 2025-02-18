import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.zdnet.co.kr',
        port: '',
        pathname: '/2020/07/13/2618bd9961df278b0a05c912da1ccb20.jpg',
        search: '',
      },
    ],
  },
};

export default nextConfig;
