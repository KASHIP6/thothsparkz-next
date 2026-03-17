import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://169.254.96.159:3000",
  ],
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
