module.exports = {
  baseUrl: process.env.TRAVIS ? '/ar-hackathon-2018/' : '/',
  configureWebpack: {
    module: {
      rules: [{
        test: /\.(usdz)(\?.*)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'img/[name].[hash:8].[ext]',
          },
        }],
      }],
    },
  },
  lintOnSave: false,
};
