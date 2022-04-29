const path = require('path');
const customQueries = {
  se: '(max-height: 670px)',
  xs: '(max-width: 500px)',
  s: '(max-width: 600px)',
  sm: '(max-width: 720px)',
  m: '(max-width: 821px)',
  md: '(max-width: 1279.5px)',
  l: '(max-width: 1536px)',
  xl: '(max-width: 1926px)',
  xxl: '(min-width: 1930px)',
  isLoad: '(min-width: 320px)',
};

module.exports = {
  siteMetadata: {
    title: 'Modular House',
  },
  // flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${path.join(__dirname, '../images')}`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-mysql`,
      options: {
        connectionDetails: {
          host: 'localhost',
          user: 'modularh_user',
          password: 'modularhouse',
          database: 'modularh_db',
        },
        queries: [
          // all houses
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

          // main page
          {
            statement: `SELECT modx_site_tmplvar_contentvalues.id, modx_site_tmplvars.name, modx_site_tmplvar_contentvalues.value,
            modx_site_content.alias FROM modx_site_tmplvar_contentvalues 
            JOIN modx_site_tmplvars ON modx_site_tmplvars.id = modx_site_tmplvar_contentvalues.tmplvarid 
            JOIN modx_site_content ON modx_site_tmplvar_contentvalues.contentid = modx_site_content.id 
            JOIN modx_site_templates ON modx_site_content.template = modx_site_templates.id 
            WHERE modx_site_content.alias = "index"`,
            idFieldName: 'id',
            name: 'MainPage',
          },

          // about us
          {
            statement: `SELECT modx_site_tmplvar_contentvalues.id, modx_site_tmplvars.name, modx_site_tmplvar_contentvalues.value,
             modx_site_content.alias FROM modx_site_tmplvar_contentvalues 
             JOIN modx_site_tmplvars ON modx_site_tmplvars.id = modx_site_tmplvar_contentvalues.tmplvarid 
             JOIN modx_site_content ON modx_site_tmplvar_contentvalues.contentid = modx_site_content.id 
             JOIN modx_site_templates ON modx_site_content.template = modx_site_templates.id 
             WHERE modx_site_content.alias = "whoweare"`,
            idFieldName: 'id',
            name: 'AboutUs',
          },
          // contacts
          {
            statement: `SELECT modx_site_tmplvar_contentvalues.id, modx_site_tmplvars.name, modx_site_tmplvar_contentvalues.value,
                 modx_site_content.alias FROM modx_site_tmplvar_contentvalues 
                 JOIN modx_site_tmplvars ON modx_site_tmplvars.id = modx_site_tmplvar_contentvalues.tmplvarid 
                 JOIN modx_site_content ON modx_site_tmplvar_contentvalues.contentid = modx_site_content.id 
                 JOIN modx_site_templates ON modx_site_content.template = modx_site_templates.id 
                 WHERE modx_site_content.alias = "contacts"`,
            idFieldName: 'id',
            name: 'Contacts',
          },
          // arenda
          {
            statement: `SELECT modx_site_tmplvar_contentvalues.id as idname, modx_site_tmplvars.name, modx_site_tmplvar_contentvalues.value,
                     modx_site_content.alias FROM modx_site_tmplvar_contentvalues 
                     JOIN modx_site_tmplvars ON modx_site_tmplvars.id = modx_site_tmplvar_contentvalues.tmplvarid 
                     JOIN modx_site_content ON modx_site_tmplvar_contentvalues.contentid = modx_site_content.id 
                     JOIN modx_site_templates ON modx_site_content.template = modx_site_templates.id 
                     WHERE modx_site_content.alias = "arenda"`,
            idFieldName: 'idname',
            name: 'Arenda',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {
          quality: 70,
          breakpoints: [750, 1366, 1920],
        },
        // Set to false to allow builds to continue on image errors
        failOnError: true,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: 'gatsby-plugin-breakpoints',
      options: {
        queries: customQueries,
      },
    },
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
    //   options: {
    //     devMode: true,
    //   },
    // },
  ],
};
