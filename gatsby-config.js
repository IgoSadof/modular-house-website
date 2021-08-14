module.exports = {
  siteMetadata: {
    title: "Modular House",
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-mysql`,
      options: {
        connectionDetails: {
          host: 'localhost',
          user: 'root',
          password: 'banderas021290',
          database: 'modhouse_modx254'
        },
        queries: [
          {
            statement: 'SELECT * FROM modxgk_site_tmplvars',
            idFieldName: 'id',
            name: 'default_text'
          }
        ]
      }
    }
  ],
};