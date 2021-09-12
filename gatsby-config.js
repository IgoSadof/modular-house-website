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
          database: 'atestmod_modx254'
        },
        queries: [
          {
            statement: 'SELECT * FROM modx_site_tmplvar_contentvalues',
            idFieldName: 'id',
            name: 'value',
          },
          {
            statement: 'SELECT * FROM modx_site_content',
            idFieldName: 'id',
            name: 'parent',
          },
        ]
      }
    }
  ],
};