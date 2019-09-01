const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

// console.log(require.resolve("css-loader"));

const sassRegex = /\.(scss|sass)$/;

const getStyleLoaders = (preProcessor) => {
  const loaders = [
    "style-loader",
    {
      loader: "css-loader",
      options: {
        importLoaders: 2,
        sourceMap: false
      }
    },
    {
      loader: "postcss-loader",
      options: {
        sourceMap: false
      }
    }
  ];
  if (preProcessor) {
    loaders.push({
      loader: preProcessor,
      options: {
        sourceMap: false
      }
    });
  }
  return loaders;
};

module.exports = {
  resolve: {
    // extensions: [".js", ".vue"],
    alias: {
      // 'vue$': 'vue/dist/vue.esm.js',
      "@": resolve("../src")
    }
  },
  module: {
    rules: [
      {
        test: sassRegex,
        // loaders: ["style-loader", "css-loader", "sass-loader"],
        use: getStyleLoaders('sass-loader')
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.stories\.jsx?$/,
        // test: /stories/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'ricon-[name]'
        }
      }
    ],
  },
};
