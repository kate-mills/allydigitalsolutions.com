/* eslint-disable no-undef */

require("dotenv").config()
const currentUrl = `https://allydigitalsolutions.com`

module.exports = {
  siteMetadata: {
    title: `Ally Digital Solutions`,
    description: `A modern approach to digital management that transforms businesses into brands through consistent and unique messaging, promoting engagement, and shaping the conversation.`,
    dateModified: `${new Date().toISOString()}`,
    author: `Ally Digital Solutions`,
    twitterUsername: `@katepycoder`,
    image: `/seoimg.jpg`,
    url: `${currentUrl}`,
    baseUrl: `${currentUrl}`,
    siteUrl: `${currentUrl}`,//keep for sitemap-plugin
    defaultImage: `${currentUrl}/seoimg.jpg`,
    organization: {
      email: `hello@allydigitalsolutions.com`,
      logo: `${currentUrl}/images/logo.svg`,
      name: `Ally Digital Solutions`,
      otherUrls: [ `https://www.instagram.com/allydigitalsolutions`, ],
      telephone: `+17072668106`,
      url: `${currentUrl}`,
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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `${currentUrl}`,
        sitemap: `${currentUrl}/sitemap/sitemap-0.xml`,
        policy: [
          { userAgent: '*', allow: '/' },
          {userAgent: '*', disallow: '/company-terms'},
          {userAgent: '*', disallow: '/contact-page'},
          {userAgent: '*', disallow: '/contact-page-cover'},
          {userAgent: '*', disallow: '/not-found-cover'},
          {userAgent: '*', disallow: '/thanks'},
        ],
      }
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ally Digital Solutions - %s`,
        short_name: `allydigital`,
        description: `A modern approach to digital management that transforms businesses into brands through consistent and unique messaging, promoting engagement, and shaping the conversation.`,
        lang: `en`,
        start_url: `/`,
        background_color:`#FFFFFF`,
        theme_color: `#06669B`,
        display: `minimal-ui`,
        icon: `src/images/maskable.png`,
        id: '/',
        crossOrigin: `use-credentials`,
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
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.AIRTABLE_ALLY_BASE_ID,
            tableName: `Illustrations`,
          },
        ],
      }
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
        head: true,
        // Setting this parameter is optional
        // Setting this parameter is also optional
        // Avoids sending pageview hits from custom paths
        //exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        // Enables Google Optimize using your container Id
        //optimizeId: "OPT-M5K5N3P",
        // Enables Google Optimize Experiment ID
        //experimentId: "nfa82CprS161s3tAv5DHEg",
      }
    },
    {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "6005676941", //YOUR_GOOGLE_TAGMANAGER_ID

      // Include GTM in development.
      //
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,

      // datalayer to be set before GTM is loaded
      // should be an object or a function that is executed in the browser
      //
      // Defaults to null
      defaultDataLayer: { platform: "gatsby" },

      // Specify optional GTM environment details.
      gtmAuth: "XAETcNcp3A5ztYiQHCdl6g", //YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING
      gtmPreview: "env-1", //YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME
      dataLayerName: "GTM-KTG89CB", //YOUR_DATA_LAYER_NAME

      // Name of the event that is triggered
      // on every Gatsby route change.
      //
      // Defaults to gatsby-route-change
      //routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
      // Defaults to false
      //enableWebVitalsTracking: true,
      // Defaults to https://www.googletagmanager.com
      //selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
    },
  },

  ],
};
