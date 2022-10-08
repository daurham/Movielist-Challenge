const path = require('path');

// module.exports = {
//   entry: '',
//   outp
// };
// const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./client/dist/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
},
  plugins: [htmlWebpackPlugin]
};