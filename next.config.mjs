/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/svc/link/:path*',
        destination: 'https://d.jiquilpan.gob.mx/:path*',
        permanent: true,
      },
      {
        source: '/transparencia/jiquilpan/:path*',
        destination: 'https://d.jiquilpan.gob.mx/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
