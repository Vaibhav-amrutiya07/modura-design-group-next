import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    // reactCompiler: true,
    images: {
  remotePatterns: [
    {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    {
      protocol: "https",
      hostname: "modura.salexo.co.in",
      pathname: "/uploads/**",
    },
    {
      protocol: "https",
      hostname: "admin.moduradesignengineering.com",
      pathname: "/uploads/**",
    },
    {
      protocol: "https",
      hostname: "moduradesignengineering.com",
      pathname: "/uploads/**",
    },
  ],
},
};

export default nextConfig;
