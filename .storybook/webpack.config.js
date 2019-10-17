const path = require("path");

module.exports = async ({ config, mode }) => {

  config.module.rules.push({
    test: /.stories.jsx?$/,
    loaders: [require.resolve("@storybook/addon-storysource/loader")],
    test: path.resolve(__dirname, "../stories"),
    enforce: "pre"
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  return config;
};