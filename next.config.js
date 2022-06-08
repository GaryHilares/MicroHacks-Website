/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.com/invite/GaPHHqANYq',
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig
