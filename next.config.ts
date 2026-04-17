import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep dev and production build outputs separate so running `next build`
  // while a local dev server is open cannot corrupt the active preview.
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
};

export default nextConfig;
