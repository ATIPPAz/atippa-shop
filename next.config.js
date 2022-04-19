/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    BaseUrl:process.env.BASE_URL
  },
  images: {
    domains: ["raw.githubusercontent.com","drive.google.com","fakestoreapi.com"],
  }
}

module.exports = nextConfig
