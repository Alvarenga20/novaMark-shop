import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["i.imgur.com", "placeimg.com", "encrypted-tbn0.gstatic.com", "via.placeholder.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.escuelajs.co",
      },
    ],
  },
};

export default nextConfig;
