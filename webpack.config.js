const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const DIST_DIR = path.join(__dirname, '../dist'); 
const HTML_FILE = path.join(DIST_DIR, 'index.html'); 
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html", 
  filename: "./src/index.html"
});
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
            use: {
              loader: "babel-loader"
            }
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