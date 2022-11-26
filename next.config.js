/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    // Important: return the modified config
    // const path = require("path")

    // var rules = [
    //   {
    //     test: /\.css$/,
    //     include: [path.resolve(__dirname, ".next/static/css")],
    //     use: ["css-loader"],
    //     exclude: /node_modules/,
    //   },
    // ]
    // config.module.rules = config.module.rules.concat(rules)
    return config
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
