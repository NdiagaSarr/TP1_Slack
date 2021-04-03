const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html", 
  filename: "./index.html"
});
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = (env, argv) => {
  console.log(argv.mode);
  return {
    entry: "./src/index.jsx",
    output: { // NEW
      path: path.join(__dirname, 'dist'),
      filename: "[name].js"
    }, // NEW Ends
    plugins: [htmlPlugin],
    module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader","eslint-loader"]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            loader: "file-loader",
            options: { name: '/logo/[name].[ext]' }
        }
      ]
    },
    watch: argv.mode === 'development',
  };
};