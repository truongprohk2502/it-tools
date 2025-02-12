import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    scrollRestoration: true,
  },
  webpack: (config) => {
    // Add the following lines to handle 'crypto' and 'fs' dependencies
    config.resolve.fallback = {
      fs: require.resolve("browserify-fs"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
    };

    // Add the 'module' configuration for handling .wasm files
    config.module.rules.push({
      test: /\.wasm$/,
      type: "javascript/auto",
    });

    return config;
  },
};

export default nextConfig;
