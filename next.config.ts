import path from "node:path";

import { headersInit } from "@/configs/security-headers";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname, "./"),
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: headersInit.map(header => ({
          key: header.key,
          value: header.value,
        })),
      },
    ];
  },
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
};

export default nextConfig;
