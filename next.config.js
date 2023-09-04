/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://amazon-backend-dc-8da5c1b7dd6b.herokuapp.com/api/:path*'
      }
    ]
    // return [
    //   {
    //     source: '/api/:path*',
    //     destination: 'http://localhost:3000/api/:path*'
    //   }
    // ]
  }
};

module.exports = nextConfig;