/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
    domains: [
      "www.shapesproducts.in",
      "img.freepik.com",
      "shapesproducts.in",
      "assets.ecollat.app",
      "assets.cms.ecollat.com",
      "assets.ecollat.in",
    ],
  },
};

module.exports = nextConfig;
