import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "placehold.co",
      pathname: "**",
    },{
      protocol: "https",
      hostname: "cdn.dribbble.com",
      pathname: "**",
    }],
    dangerouslyAllowSVG: true,

  },
  /* config options here */
};

export default nextConfig;
