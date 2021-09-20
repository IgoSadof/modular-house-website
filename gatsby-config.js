module.exports = {
  siteMetadata: {
    title: "Modular House",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-mysql`,
      options: {
        connectionDetails: {
          host: 'localhost',
          user: 'root',
          password: 'banderas021290',
          database: 'modularh_db'
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
          // это достает все дома
          {
            statement: `SELECT modx_site_tmplvar_contentvalues.id,modx_site_tmplvars.name, modx_site_tmplvar_contentvalues.value, modx_site_content.id AS contentID, modx_site_content.alias
            FROM modx_site_tmplvar_contentvalues
            JOIN modx_site_tmplvars ON modx_site_tmplvars.id = modx_site_tmplvar_contentvalues.tmplvarid
            JOIN modx_site_content ON modx_site_tmplvar_contentvalues.contentid = modx_site_content.id
            JOIN modx_site_templates ON modx_site_content.template = modx_site_templates.id
            WHERE modx_site_templates.templatename = "Дом"`,
            idFieldName: 'id',
            name: 'Houses',
          },
          // это достает все модули
          {
            statement: `SELECT modx_site_tmplvar_contentvalues.id , modx_site_tmplvars.name AS parameterName, modx_site_tmplvar_contentvalues.value AS parameterValue, modx_site_content.id AS contentId, modx_site_content.parent AS parentId, modx_site_content.alias AS moduleName
            FROM modx_site_tmplvar_contentvalues
            JOIN modx_site_tmplvars ON modx_site_tmplvars.id = modx_site_tmplvar_contentvalues.tmplvarid
            JOIN modx_site_content ON modx_site_tmplvar_contentvalues.contentid = modx_site_content.id
            JOIN modx_site_templates ON modx_site_content.template = modx_site_templates.id
            WHERE modx_site_templates.templatename = "Модуль"`,
            idFieldName: 'id',
            name: 'Modules',
          },
        ]
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
  ],
};
