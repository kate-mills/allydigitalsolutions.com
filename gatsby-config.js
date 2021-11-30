/* eslint-disable no-undef */

const currentUrl = `https://ally-ten.netlify.app`

module.exports = {
  plugins: [
    'gatsby-plugin-top-layout',
    'gatsby-plugin-mui-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`, // needed for graphql
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [`Inter:400,500,600`]
        }
      }
    },
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `%s | Ally Digital Solutions`,
        short_name: `AllyDigital`,
        start_url: `/`,
        background_color:`#b9bdbd`,
        theme_color: `#b9bdbd`,
        display: `standalone`,
        icon: `src/images/icon-square.png`,
        crossOrigin: `use-credentials`,
        description: `We help businesses establish a solid online presence, showcase their brand, and build an online community.`,
        lang: `en`,
      },
    },
    //{ resolve: 'gatsby-plugin-preconnect', options: { domains: ['https://foo.com', 'https://bar.com'], }, },
    //`gatsby-plugin-offline`, //last
  ],
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
    defaultImage: `${currentUrl}/seoimage.jpg`,
    organization: {
      name: `Ally Digital Solutions`,
      url: `${currentUrl}`,
      logo: `${currentUrl}/images/logo.svg`,
      telephone: `707-266-8106`,
      priceRange: `$$$`,
    }
  },
};
