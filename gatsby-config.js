const path = require('path');
const customQueries = {
  se: '(max-height: 670px)',
  xs: '(max-width: 500px)',
  s: '(max-width: 600px)',
  sm: '(max-width: 720px)',
  m: '(max-width: 821px)',
  md: '(max-width: 1279px)',
  l: '(max-width: 1536px)',
  minxl: '(min-width: 1920px)',
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
            statement: `SELECT modx_site_tmplvar_contentvalues.id,modx_site_tmplvars.name, modx_site_tmplvar_contentvalues.value, modx_site_content.published, modx_site_content.id AS contentID, modx_site_content.alias, modx_site_content.menutitle AS position
            FROM modx_site_tmplvar_contentvalues
            JOIN modx_site_tmplvars ON modx_site_tmplvars.id = modx_site_tmplvar_contentvalues.tmplvarid
            JOIN modx_site_content ON modx_site_tmplvar_contentvalues.contentid = modx_site_content.id
            JOIN modx_site_templates ON modx_site_content.template = modx_site_templates.id
            WHERE modx_site_templates.templatename = "Дом"`,
            idFieldName: 'id',
            name: 'Houses',
          },

            // all houses english
            {
              statement: `SELECT modx_site_tmplvar_contentvalues.id,modx_site_tmplvars.name, modx_site_tmplvar_contentvalues.value, modx_site_content.published, modx_site_content.id AS contentID, modx_site_content.alias, modx_site_content.menutitle AS position
              FROM modx_site_tmplvar_contentvalues
              JOIN modx_site_tmplvars ON modx_site_tmplvars.id = modx_site_tmplvar_contentvalues.tmplvarid
              JOIN modx_site_content ON modx_site_tmplvar_contentvalues.contentid = modx_site_content.id
              JOIN modx_site_templates ON modx_site_content.template = modx_site_templates.id
              WHERE modx_site_templates.templatename = "Дом-en"`,
              idFieldName: 'id',
              name: 'HousesEn',
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

             // main page english
             {
              statement: `SELECT modx_site_tmplvar_contentvalues.id, modx_site_tmplvars.name, modx_site_tmplvar_contentvalues.value,
              modx_site_content.alias FROM modx_site_tmplvar_contentvalues 
              JOIN modx_site_tmplvars ON modx_site_tmplvars.id = modx_site_tmplvar_contentvalues.tmplvarid 
              JOIN modx_site_content ON modx_site_tmplvar_contentvalues.contentid = modx_site_content.id 
              JOIN modx_site_templates ON modx_site_content.template = modx_site_templates.id 
              WHERE modx_site_content.alias = "index-en"`,
              idFieldName: 'id',
              name: 'MainPageEn',
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
             // about us english
             {
              statement: `SELECT modx_site_tmplvar_contentvalues.id, modx_site_tmplvars.name, modx_site_tmplvar_contentvalues.value,
               modx_site_content.alias FROM modx_site_tmplvar_contentvalues 
               JOIN modx_site_tmplvars ON modx_site_tmplvars.id = modx_site_tmplvar_contentvalues.tmplvarid 
               JOIN modx_site_content ON modx_site_tmplvar_contentvalues.contentid = modx_site_content.id 
               JOIN modx_site_templates ON modx_site_content.template = modx_site_templates.id 
               WHERE modx_site_content.alias = "whoweare-en"`,
              idFieldName: 'id',
              name: 'AboutUsEn',
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
             // contacts english
             {
              statement: `SELECT modx_site_tmplvar_contentvalues.id, modx_site_tmplvars.name, modx_site_tmplvar_contentvalues.value,
                   modx_site_content.alias FROM modx_site_tmplvar_contentvalues 
                   JOIN modx_site_tmplvars ON modx_site_tmplvars.id = modx_site_tmplvar_contentvalues.tmplvarid 
                   JOIN modx_site_content ON modx_site_tmplvar_contentvalues.contentid = modx_site_content.id 
                   JOIN modx_site_templates ON modx_site_content.template = modx_site_templates.id 
                   WHERE modx_site_content.alias = "contacts-en"`,
              idFieldName: 'id',
              name: 'ContactsEn',
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
             // arenda english
             {
              statement: `SELECT modx_site_tmplvar_contentvalues.id as idname, modx_site_tmplvars.name, modx_site_tmplvar_contentvalues.value,
                       modx_site_content.alias FROM modx_site_tmplvar_contentvalues 
                       JOIN modx_site_tmplvars ON modx_site_tmplvars.id = modx_site_tmplvar_contentvalues.tmplvarid 
                       JOIN modx_site_content ON modx_site_tmplvar_contentvalues.contentid = modx_site_content.id 
                       JOIN modx_site_templates ON modx_site_content.template = modx_site_templates.id 
                       WHERE modx_site_content.alias = "arenda-en"`,
              idFieldName: 'idname',
              name: 'ArendaEn',
            },
             // menu
             {
              statement: `SELECT modx_site_content.id, modx_site_content.longtitle as name,modx_site_content.link_attributes as link, modx_site_content.published,modx_site_content.menutitle
              FROM modx_site_content
              WHERE modx_site_content.introtext = "RU"`,
              idFieldName: 'id',
              name: 'Menu',
            },
            // menu english
            {
              statement: `SELECT modx_site_content.id, modx_site_content.longtitle as name,modx_site_content.link_attributes as link, modx_site_content.published,modx_site_content.menutitle
              FROM modx_site_content
              WHERE modx_site_content.introtext = "EN"`,
              idFieldName: 'id',
              name: 'MenuEn',
            },
        ],
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-breakpoints',
      options: {
        queries: customQueries,
      },
    },
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        // The ID of yandex metrika.
        trackingId: 57371404,
        // Enabled a webvisor. The default value is `false`.
        webvisor: true,
        // Enables tracking a hash in URL. The default value is `false`.
        trackHash: true,
        // Defines where to place the tracking script - `false` means before body (slower loading, more hits)
        // and `true` means after the body (faster loading, less hits). The default value is `false`.
        afterBody: true,
        // Use `defer` attribute of metrika script. If set to `false` - script will be loaded with `async` attribute.
        // Async enables earlier loading of the metrika but it can negatively affect page loading speed. The default value is `false`.
        defer: false,
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
