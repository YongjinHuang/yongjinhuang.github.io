import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // output: 'standalone',
  output: 'export',
  images: {
    unoptimized: true,
    domains: [
      'resources.wobbjobs.com',
      'i.pinimg.com',
      'encrypted-tbn0.gstatic.com',
    ],
  },
  basePath: '/profile',
};

export default nextConfig;
