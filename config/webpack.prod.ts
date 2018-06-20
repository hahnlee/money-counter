import * as autoprefixer from 'autoprefixer';
import * as merge from 'webpack-merge';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';

import commonConfig from './webpack.common';

export default merge({}, commonConfig, {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
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
            {
              loader: 'sass-loader',
            }
          ],
        })
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
  node: {
    fs: 'empty',
  },
  mode: 'production',
});
