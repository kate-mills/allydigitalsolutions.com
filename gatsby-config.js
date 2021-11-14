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
    { resolve: `gatsby-plugin-manifest`,
      options: {
        name: `%s | Ally Digital Solutions`,
        short_name: `AllyDigital`,
        description: `We help businesses establish a solid online presence, showcase their brand, and build an online community.`,
        start_url: `/`,
        background_color:`#b9bdbd`,
        theme_color: `#b9bdbd`,
        display: `standalone`,
        icon: `src/images/icon-square.png`,
      },
    },
    'gatsby-plugin-top-layout',
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-mui-emotion',
    //'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    //`gatsby-plugin-netlify`,
    //`gatsby-plugin-offline`, //last
   {
      resolve: `gatsby-plugin-netlify-identity-gotrue`,
      options: {
        url: `https://ally-ten.netlify.app`, // no trailing slash
      }
    },
  ],
  siteMetadata: {
    title: 'Ally Digital Solutions',
  },
};
