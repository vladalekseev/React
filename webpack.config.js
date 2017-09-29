const path = require('path');

module.exports = {
    entry : path.join(__dirname, 'src', 'app.jsx'),
    output : {
        path : path.join(__dirname, 'public'),
        filename : 'bundle.js'
    },

    module : {
        rules : [
            {
                test : /\.jsx$/,
                exclude: /node_modules/,
                use: ['react-hot-loader', 'babel-loader']
            },
            {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    devtool: 'eval-source-map',

    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    }
};