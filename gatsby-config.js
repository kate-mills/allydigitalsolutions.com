/* eslint-disable no-undef */
const currentUrl = `https://ally-ten.netlify.app`

module.exports = {
  siteMetadata: {
    title: `Ally Digital Solutions`,
    titleTemplate: `%s | Ally Digital Solutions`,
    description: `Learn more about boosting your beauty business in 2021 with a custom website designed by an aesthetic industry expert.`,
    dateModified: `${new Date().toISOString()}`,
    author: `Ally Digital Solutions`,
    twitterUsername: `@katie_napa`,
    image: `/seoimage.jpg`,
    url: `${currentUrl}`,
    baseUrl: `${currentUrl}`,
    siteUrl: `${currentUrl}`,//keep for sitemap-plugin
    organization: {
      name: `Ally Digital Solutions`,
      url: `${currentUrl}`,
      //logo: `https://allydigitalsolutions.com/images/logo.jpg`,
      telephone: `707-266-8106`,
      priceRange: `$$$`,
    }
  },
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
    'gatsby-plugin-top-layout',
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-mui-emotion',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `%s | Ally Digital Solutions`,
        short_name: `AllyDigital`,
        description: `We help businesses establish a solid online presence, showcase their brand, and build an online community.`,
        lang: `en`,
        start_url: `/`,
        background_color:`#b9bdbd`,
        theme_color: `#b9bdbd`,
        display: `standalone`,
        icon: `src/images/icon-square.png`,
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-identity-gotrue',
      options: {
        url: `${currentUrl}`,
      }
    },
    //'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    //`gatsby-plugin-netlify`,
    //`gatsby-plugin-offline`, //last
  ],
};
