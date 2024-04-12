/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.weatherbit.io',
        port: '',
      },
    ]
  }
};

export default nextConfig;
