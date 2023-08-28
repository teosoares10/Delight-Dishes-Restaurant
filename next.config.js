/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        pathname: '/**'
      }
    ]
  }
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
