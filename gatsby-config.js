module.exports = {
  siteMetadata: {
    title: `System of the Down Tribute Band`,
    description: `System of the Down Tribute Band .`,
    author: `@sotd`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `system-of-the-down`,
        short_name: `sotd`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        appName: "System of the Down Tribute Band",
        appDescription: "System of a Donw Tribute Band",
        developerName: null,
        developerURL: null,
        dir: "auto",
        lang: "cs-CZ",
        background: "#000",
        theme_color: "#000",
        display: "standalone",
        orientation: "any",
        start_url: "/",
        version: "1.0",

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`cs`, `en`],
        defaultLanguage: `cs`,
        redirect: true,
        redirectComponent: require.resolve(`./src/components/redirect.js`),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-140693082-1",
      },
    },
  ],
};
