/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "picsum.photos",
      "www.gravatar.com",
      "platform-lookaside.fbsbx.com",
    ],
  },
};

module.exports = nextConfig;
