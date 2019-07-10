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
  pathPrefix: `/hxl-redesign`,
  siteMetadata: {
    title: `HXL`,
    description: `HXL is a different kind of data standard, designed to improve information sharing during a humanitarian crisis without adding extra reporting burdens.`,
    author: `@humdata`,
  },
  plugins: [
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
        baseUrl: `blog.dev.hxlstandard.org`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: true,
        backgroundColor: `white`,
        verboseOutput: false,
        excludedRoutes: [
          "/acf/v3/categories",
          "/acf/v3/tags/",
          "/acf/v3/comments/",
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
        ],
        plugins: [
          {
            resolve: `gatsby-wordpress-inline-images`,
            options: {
              baseUrl: `blog.dev.hxlstandard.org`,
              protocol: `http`,
              backgroundColor: `white`,
              maxWidth: 650,
              wrapperStyle: `gatsby-image-wrapper`,
            }
          }
        ]
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
