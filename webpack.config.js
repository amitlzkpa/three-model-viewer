/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/camelcase */
const path = require('path');
// const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const baseConfig = {
  // plugins: [new WebpackBundleAnalyzer()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.json'
        }
      },
      {
        test: /\.(png|jpg|gif|svg|mp4)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: Infinity // 8192
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  optimization: { concatenateModules: false, providedExports: false, usedExports: false },
  output: {
    filename: '[name]-bundle.js',
    path: path.join(__dirname, 'dist')
  },
  devServer: {
    contentBase: __dirname,
    publicPath: '/',
    compress: true,
    port: 3000
  }
};

module.exports = [
  {
    ...baseConfig,
    entry: {
      app: './src/app.ts'
    }
  },
  {
    ...baseConfig,
    entry: {
      test: './src/testutil/testBundle.ts'
    }
  }
];
