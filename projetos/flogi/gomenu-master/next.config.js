const webpack = require('webpack')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withCSS = require('@zeit/next-css')
const path = require('path')

const withReactStorefront = require('react-storefront/plugins/withReactStorefront')
require('dotenv').config()

module.exports = withReactStorefront({
  target: 'serverless',
  connector: 'connector',
  webpack: config => {
    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      })
    )
    return config
  },
})
const nextConfig = {
  webpack: (config, { dev }) => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env))

    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['static'] = path.join(__dirname, 'static')

    return config
  },
}

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        handleImages: ['jpeg', 'png'],
      },
    ],
    withCSS,
  ],
  nextConfig
)
