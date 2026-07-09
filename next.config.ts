import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/sultan-lusion",
  images: { unoptimized: true },
};

export default nextConfig;
