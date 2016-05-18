const path = require('path');

const babel = {
    presets: ['es2015', 'react'],
};

module.exports = {
    entry: './app.js',
    resolve: {
        root: path.resolve(__dirname),
        extensions: ['', '.js', '.jsx'],
    },
    output: {
        filename: 'bundle.js',
        path: './public/js/',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /(node_modules)/,
                query: babel,
            },
        ],
    },
};
