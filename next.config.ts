import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // three and the R3F packages ship untranspiled ESM; Next must transpile them.
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei", "@react-three/postprocessing", "postprocessing"],
  eslint: { ignoreDuringBuilds: true },
  images: {
    // remote hero/section art (see notes); everything else stays local in /public
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
