const path = require('path');

module.exports = {
    mode: "development",
    entry: './main.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            { test: /\.ts?$/, loader: "ts-loader" }
        ]
    }
};
