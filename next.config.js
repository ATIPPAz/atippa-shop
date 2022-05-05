/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    BaseUrl:process.env.BASE_URL
  },
  images: {
    domains: ["raw.githubusercontent.com","drive.google.com","fakestoreapi.com","aumento.officemate.co.th","lzd-img-global.slatic.net","img.my-best.in.th","store.ais.co.th","backend.central.co.th"],
    loading:"lazy",
  }
}

module.exports = nextConfig
