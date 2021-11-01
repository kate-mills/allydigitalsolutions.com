/* eslint-disable no-undef */
module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `%s | Ally Digital Solutions`,
        short_name: `allydigital`,
        description: `Web solutions for beauty specialists by industry experts. Elevate your online presence with specialized web design for the beauty industry.`,
        lang: `en`,
        start_url: `/`,
        background_color:`#bcbcbd`,
        theme_color: `#bcbcbd`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        crossOrigin: `use-credentials`,
      },
    },
    'gatsby-plugin-top-layout',
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-mui-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    //`gatsby-plugin-offline`, //last
  ],
  siteMetadata: {
    title: 'Ally Digital Solutions',
  },
};
