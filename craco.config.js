const path = require('path')

module.exports = {
    webpack: {
        alias: {
            '@Components': path.resolve(__dirname, 'src/components'),
            '@Types': path.resolve(__dirname, 'src/types'),
            '@Store': path.resolve(__dirname, 'src/store'),
        },
    },
}
