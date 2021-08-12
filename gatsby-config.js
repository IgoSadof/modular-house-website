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
          // host: 'vh108.hoster.by',
          // user: 'modularh_user',
          // password: 'banderas021290',
          // database: 'modularh_test'
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
// host: 'ns1.hoster.by',
// user: 'modularh_modx369',
// password: 'banderas021290',
// database: 'modularh_modx369'