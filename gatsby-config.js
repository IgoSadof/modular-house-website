module.exports = {
  siteMetadata: {
    title: "Modular House",
  },
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
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
