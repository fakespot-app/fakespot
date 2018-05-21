/* eslint-disable import/no-commonjs, import/no-extraneous-dependencies */
const autoprefixer = require("autoprefixer");
const postCSSNested = require("postcss-nested");

module.exports = {
  plugins: [
    postCSSNested,
    autoprefixer(),
  ],
};