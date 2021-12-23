/* eslint-disable no-undef */

require("dotenv").config()
const currentUrl = `https://allydigitalsolutions.com`

module.exports = {
  siteMetadata: {
    title: `Ally Digital Solutions - Build a solid online presence, showcase your brand & inspire action.`,
    titleTemplate: `%s | Ally Digital Solutions`,
    description: `A modern approach to digital management that transforms businesses into brands through consistent and unique messaging, promoting engagement, and shaping the conversation.`,
    dateModified: `${new Date().toISOString()}`,
    author: `Ally Digital Solutions`,
    twitterUsername: `@katie_napa`,
    image: `/seoimg.jpg`,
    url: `${currentUrl}`,
    baseUrl: `${currentUrl}`,
    siteUrl: `${currentUrl}`,//keep for sitemap-plugin
    defaultImage: `${currentUrl}/seoimg.jpg`,
    organization: {
      name: `Ally Digital Solutions`,
      url: `${currentUrl}`,
      logo: `${currentUrl}/images/logo.svg`,
      telephone: `707-266-8106`,
      priceRange: `$$$`,
    }
  },
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
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `%s | Ally Digital Solutions`,
        short_name: `AllyDigital`,
        description: `A modern approach to digital management that transforms businesses into brands through consistent and unique messaging, promoting engagement, and shaping the conversation.`,
        lang: `en`,
        start_url: `/`,
        background_color:`#B6BFC3`,
        theme_color: `#B6BFC3`,
        display: `standalone`,
        icon: `src/images/icon-square.png`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {

        domains: ['https://foo.com', 'https://bar.com'],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options:{
        trackingId: "UA-215693750-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        //cookieDomain: "example.com",
        // defaults to false
        enableWebVitalsTracking: true,
      }
    },
  ],
};
