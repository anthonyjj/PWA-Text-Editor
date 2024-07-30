const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const path = require('path');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
plugins: [
  new HtmlWebpackPlugin({
    template: './src/js/index.js',
    title: 'Webpack Plugin',
  }),
  new MiniCssExtractPlugin(),
  new WorkboxPlugin.GenerateSW()
],

new WebpackPwaManifest({
  fingerprints: false,
  inject: true,
  name: "PWA Text Editor",
  short_name: "JATE",
  description: "Text Editor",
  background_color: "#225ca3",
  start_url: "/",
  publicPath: "/",
})
// TODO: Add CSS loaders and babel to webpack.
module: {
  rules: [
    {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, 'css-loader'],
    }
  ]
}

new InjectManifest({
  swSrc: "./src-sw,js",
  swDest: "src-sw.js",
}),

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
