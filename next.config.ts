import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'macfinder.co.uk',
        port: '',
        pathname: '/wp-content/uploads/2022/12/img-MacBook-Pro-Retina-14-Inch-21256.jpg',
        search: '',
      },
    ],
  },
};

export default nextConfig;
