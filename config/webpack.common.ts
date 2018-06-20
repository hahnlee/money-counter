import * as path from 'path';

import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';

import { buildDir, nodeModuleDir, srcDir, } from './paths';

const commonConfig: webpack.Configuration = {
  entry: path.resolve(srcDir, 'index.tsx'),
  output: {
    filename: 'bundle.js?v=[chunkhash]',
    path: buildDir,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
        options: {
          useBabel: true,
          useCache: true,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(srcDir, 'index.html'),
      hash: true,
    }),
  ],
  resolve: {
    extensions: [
      '.js',
      '.ts',
      '.tsx',
    ],
    modules: [
      srcDir,
      nodeModuleDir,
    ],
  },
};

export default commonConfig;
