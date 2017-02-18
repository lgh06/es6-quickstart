module.exports = {
  entry: "./src/entry",
  output: {
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          "presets": [
            ["env", {"modules": false, "targets": {"android": 4}, "debug": true, "useBuiltIns": true}]
          ]
        }
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ]
  },
  devtool: '#cheap-module-source-map'  //eval
}
