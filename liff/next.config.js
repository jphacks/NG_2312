/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["books.google.com", "profile.line-scdn.net"],
  },
  // swcMinify: true,
};

module.exports = nextConfig;
