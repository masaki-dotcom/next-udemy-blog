import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //画像を扱う場合追加する
  images: {
    remotePatterns: [
    {
    protocol: 'https',
    hostname: 'picsum.photos',
    },
    ],
    }
};

export default nextConfig;
