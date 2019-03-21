module.exports = {
  siteMetadata: {
    title: `Tax Prom 2019`,
    description: `Celebrating 82 Years of Promoting Better Tax Policy`,
    author: `@taxfoundation`,
    siteUrl: 'https://taxprom.com',
    siteMetaImage: '/images/siteMetaImage.jpg',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tax Prom 2019`,
        short_name: `Tax Prom`,
        start_url: `/`,
        background_color: `#0094ff`,
        theme_color: `#0094ff`,
        display: `standalone`,
        icon: `src/images/tf-logo.png`,
        include_favicon: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Libre Baskerville:400,400i,700'],
        },
        typekit: {
          id: 'obh3hwp',
        },
      },
    },
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
