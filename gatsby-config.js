require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

process.env.API_URL = 'blog.dev.hxlstandard.org';//(process.env.API_URL===undefined) ? 'blog.dev.hxlstandard.org' : process.env.API_URL;
console.log(`Using environment config: '${process.env.NODE_ENV}', ${process.env.API_URL}, ${process.env.GA_ID}`)

// gatsby-node.js
exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === 'build-javascript') {
    // turn off source-maps
    actions.setWebpackConfig({
      devtool: false
    })
  }
};

module.exports = {
  siteMetadata: {
    title: `Humanitarian Exchange Language`,
    description: `HXL is a different kind of data standard, designed to improve information sharing during a humanitarian crisis without adding extra reporting burdens.`,
    author: `@humdata`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GA_ID,
        ],
        pluginConfig: {
          head: false,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/assets/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/hxl-favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: process.env.API_URL,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
        backgroundColor: `white`,
        verboseOutput: false,
        excludedRoutes: [
          "/acf/v3/categories",
          "/acf/v3/options/",
          "/acf/v3/users/",
          "/wp/v2/users/me", 
          "/wp/v2/settings", 
          "/wp/v2/themes", 
          "/akismet/v1/**", 
          "/redirection/v1/**",
          "**/*/*/taxonomies", 
          "**/*/*/comments",
          "**/*/*/search",
          "**/*/*/tags",
          "**/*/*/blocks",
        ]
      },
    },
    {
      resolve: 'gatsby-plugin-mixpanel',
      options: {
        apiToken: process.env.MIXPANEL_TOKEN,
        enableOnDevMode: true,
        mixpanelConfig: null,
        pageViews: null,
        trackPageViewsAs: 'page view'
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
