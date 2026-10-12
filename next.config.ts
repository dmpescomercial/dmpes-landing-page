import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Preserve the project's own AGENTS.md without generated framework additions.
  agentRules: false,
  images: { qualities: [75, 90] },
};

export default nextConfig;
