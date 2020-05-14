const nextConfig = {

    webpack(config) {
        config.module.rules.push({
              test: /\.js$/,
              use: ['source-map-loader'],
              enforce: 'pre',
            }
        )

        return config
    },
}

module.exports = nextConfig
