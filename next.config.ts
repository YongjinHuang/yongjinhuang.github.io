import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '',
  output: 'export',
  images: {
    unoptimized: true,
    domains: [
      'resources.wobbjobs.com',
      'i.pinimg.com',
      'encrypted-tbn0.gstatic.com',
    ],
  },
};

export default nextConfig;
