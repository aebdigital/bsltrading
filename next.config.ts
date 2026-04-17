import type { NextConfig } from "next";

const isNetlifyBuild = Boolean(process.env.NETLIFY);
const distDir =
  process.env.NEXT_DIST_DIR ??
  (isNetlifyBuild ? ".next" : process.env.NODE_ENV === "development" ? ".next-dev" : ".next-prod");

const nextConfig: NextConfig = {
  // Keep local dev and local production builds separate, but preserve the
  // standard `.next` directory on Netlify so its Next.js runtime can detect
  // the expected build output during deploys.
  distDir,
};

export default nextConfig;
