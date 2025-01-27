import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: [
      'resources.wobbjobs.com',
      'i.pinimg.com',
      'encrypted-tbn0.gstatic.com',
    ],
  },
};

export default nextConfig;
