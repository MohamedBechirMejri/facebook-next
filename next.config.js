/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "picsum.photos",
      "www.gravatar.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "scontent.ftun9-1.fna.fbcdn.net",
    ],
  },
};

module.exports = nextConfig;
