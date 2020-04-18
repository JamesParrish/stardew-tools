const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const plugins = [
  new HtmlWebPackPlugin({
    inject: true,
    template: path.join(process.cwd(), 'src/index.html'),
  }),
];

module.exports = (options) => ({
  mode: options.mode,
  entry: [path.join(process.cwd(), 'src/index.tsx')],
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.js', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  devServer: options.devServer,
  plugins: options.plugins.concat(plugins),
});
