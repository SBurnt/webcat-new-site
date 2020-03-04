const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    // splitChunks: {
    //     chunks: 'all'
    // }
  };

  if (isProd) {
    config.minimizer = [new OptimizeCssAssetPlugin(), new TerserWebpackPlugin()];
  }
  return config;
};

const filename = ext => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const cssLoaders = extra => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true,
      },
    },
    'css-loader',
  ];

  if (extra) {
    loaders.push(extra);
  }
  return loaders;
};

const optimizationImg = () => {
  let config = {
    loader: 'image-webpack-loader',
    options: {},
  };
  if (isProd) {
    config = {
      loader: 'image-webpack-loader',
      options: {
        mozjpeg: {
          progressive: true,
          quality: 70,
        },
        optipng: {
          enabled: true,
        },
        pngquant: {
          quality: [0.65, 0.90],
          speed: 4
        },
        gifsicle: {
          interlaced: false,
        }
      },
    };
  }
  return config;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['@babel/polyfill', './index.js'],
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.json', '.png'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimization: optimization(),
  devServer: {
    port: 8081,
    hot: isDev,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/assets/img'),
        to: path.resolve(__dirname, 'dist/assets/img'),
      },
      // { from: path.resolve(__dirname, 'src/assets/fonts'), to: path.resolve(__dirname, 'dist/assets/fonts') },
    ]),
    new MiniCssExtractPlugin({
      filename: filename('css')
    }),
    // new MiniCssExtractPlugin({ filename: 'css/[name].css', chunkFilename: 'css/[id].css' }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader'),
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/img',
              useRelativePath: true,
            },
          },
          optimizationImg(),
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/fonts/',
            },
          },
        ],
      },
      {
        test: /\.xml$/,
        use: ['xml-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
    ],
  },
};
