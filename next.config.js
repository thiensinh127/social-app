/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "askbootstrap.com",
        port: "",
        pathname: "/preview/vogel-v-12/img/logo.png",
      },
      {
        protocol: "https",
        hostname: "askbootstrap.com",
        port: "",
        pathname: "/preview/vogel-v-12/img/rmate1.jpg",
      },
      {
        protocol: "https",
        hostname: "askbootstrap.com",
        port: "",
        pathname: "/preview/vogel-v-12/img/post2.png",
      },
    ],
  },
}

module.exports = nextConfig
