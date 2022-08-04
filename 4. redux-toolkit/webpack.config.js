const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "redux-toolkit",
  mode: "development", // production
  devtool: "eval", // hidden-source-map
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    app: ["./src/client"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          // -> plugin들의 모음이 preset
          presets: [
            [
              "@babel/preset-env",
              {
                targets: { browsers: ["> 5% in KR", "last 2 chrome versions"] },
              },
            ],
            "@babel/preset-react",
          ],
          plugins: ["react-refresh/babel"],
        },
      },
    ],
  },
  plugins: [new RefreshWebpackPlugin()],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  devServer: {
    // index.html일 때만 사용 가능
    devMiddleware: { publicPath: "/dist" },
    static: { directory: path.join(__dirname, "src") }, // index.html의 위치
    hot: true,
  },
};
