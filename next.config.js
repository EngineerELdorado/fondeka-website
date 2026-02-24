/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: '/',
        has: [{ type: 'host', value: 'fondeka.com' }],
        destination: 'https://www.fondeka.com/',
        permanent: true,
      },
      {
        source: '/:path((?!\\.well-known\\/).*)',
        has: [{ type: 'host', value: 'fondeka.com' }],
        destination: 'https://www.fondeka.com/:path',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }]
      },
      {
        source: "/.well-known/assetlinks.json",
        headers: [{ key: "Content-Type", value: "application/json" }]
      }
    ];
  }
};
