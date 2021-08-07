module.exports = {
  siteMetadata: {
    title: "Modular House",
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    `gatsby-plugin-material-ui`,
    // {
    //   resolve: `gatsby-plugin-postcss`,
    //   options: {
    //     postCssPlugins: [require("autoprefixer")()],
    //   },
    // },
  ],
};
