const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  eslint: {
    ignoreDuringBuilds: true,
  },
};
module.exports = nextConfig;
