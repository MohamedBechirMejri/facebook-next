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
      "media7.giphy.com",
      "media6.giphy.com",
      "media5.giphy.com",
      "media4.giphy.com",
      "media3.giphy.com",
      "media2.giphy.com",
      "media1.giphy.com",
      "media0.giphy.com",
      "pbs.twimg.com",
    ],
  },
};

module.exports = nextConfig;
