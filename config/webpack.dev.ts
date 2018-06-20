import * as autoprefixer from 'autoprefixer';
import * as merge from 'webpack-merge';

import { outDir, } from './paths';
import commonConfig from './webpack.common';

export default merge({}, commonConfig, {
  devtool: 'source-map',
  output: {
    filename: 'bundle.js?v=[hash]',
    path: outDir,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9' // React doesn't support IE8 anyway
                  ],
                }),
              ],
            },
          },
        ],
      },
    ],
  },
  entry: [
    'react-dev-utils/webpackHotDevClient',
    commonConfig.entry as string,
  ],
  devServer: {
    contentBase: outDir,
    compress: true,
    port: 3000,
    hot: true,
    inline: true,
  },
  mode: 'development',
});
