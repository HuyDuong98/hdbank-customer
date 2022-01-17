/** @type {import('next').NextConfig} */
const path = require("path");
const withReactSvg = require("next-react-svg");

module.exports = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  ...withReactSvg({
    include: path.resolve(__dirname, "public/assets"),
    webpack(config, options) {
      return config;
    },
  }),
};
