const path = require('path');

module.exports = {
    entry: './js/dashboard_main.js', // Update this line
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/, // CSS loader
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/, // Image loader
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'images',
                        },
                    },
                    {
                        loader: 'image-webpack-loader', // Image optimization loader
                        options: {
                            mozjpeg: { progressive: true },
                            optipng: { enabled: false },
                            pngquant: { quality: [0.65, 0.90], speed: 4 },
                            gifsicle: { interlaced: false },
                            webp: { quality: 75 },
                        },
                    },
                ],
            },
        ],
    },
    performance: {
        hints: 'warning',
        maxEntrypointSize: 250000,
        maxAssetSize: 250000,
    },
};
