const path                            = require('path')
const fs                              = require('fs')
const MiniCssExtractPlugin            = require('mini-css-extract-plugin')
const CopyWebpackPlugin               = require('copy-webpack-plugin')
const HtmlWebpackPlugin               = require('html-webpack-plugin')
const { VueLoaderPlugin }             = require('vue-loader')
const WebpackBundleSizeAnalyzerPlugin = require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin;

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../built'),
  assets: 'assets/'
}

const PAGES_DIR = PATHS.src
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.html'))

module.exports = {
  target: 'web',
  externals: {
    paths: PATHS
  },
  entry: {
    main: `${PATHS.src}/index.ts`,
  },
  output: {
    filename: `${PATHS.assets}js/[name].[contenthash].js`,
    path: PATHS.dist
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loader: {
            stylus: 'vue-style-loader!css-loader!stylus-loader'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]'
        }
      }, 
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name][ext]'
        }
      },
      {
        test: /\.styl(us)?$/,
        use: [
          {
            loader: 'vue-style-loader'
          },
          {
            loader: "style-loader"
          },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../'
            }
          },
          {
            loader: "css-loader",
            options: { 
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: `./postcss.config.js` } }
          },
          {
            loader: "stylus-loader",
            options: { 
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'vue-style-loader'
          },
          {
            loader: "style-loader"
          },
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          }, 
          {
            loader: 'postcss-loader',
            options: { 
              sourceMap: true, 
              config: { path: `./postcss.config.js` }
            }
          }
        ]
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              indentedSyntax: true
            },
            options: {
              implementation: require('sass'),
              sassOptions: {
                indentedSyntax: true
              },
            },
          },
        ],
      },
    ]
  },
  resolve: {
    alias: {
      '~': PATHS.src
    }
  },
  plugins: [
    new WebpackBundleSizeAnalyzerPlugin('./plain-report.txt'),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[contenthash].css`,
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/assets/img/icons`, to: `${PATHS.assets}/img` },
    ]),
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page}`,
      minify: false,
      cache: true,
    }))
  ],
}
