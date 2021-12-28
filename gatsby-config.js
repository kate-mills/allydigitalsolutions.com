/* eslint-disable no-undef */

require("dotenv").config()
const currentUrl = `https://allydigitalsolutions.com`

module.exports = {
  siteMetadata: {
    title: `Ally Digital Solutions`,
    description: `A modern approach to digital management that transforms businesses into brands through consistent and unique messaging, promoting engagement, and shaping the conversation.`,
    dateModified: `${new Date().toISOString()}`,
    author: `Ally Digital Solutions`,
    twitterUsername: `@katepycoder `,
    image: `/seoimg.jpg`,
    url: `${currentUrl}`,
    baseUrl: `${currentUrl}`,
    siteUrl: `${currentUrl}`,//keep for sitemap-plugin
    defaultImage: `${currentUrl}/seoimg.jpg`,
    organization: {
      email: `hello@${currentUrl}`,
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
          {userAgent: '*', disallow: '/404'},
          {userAgent: '*', disallow: '/about-us'},
          {userAgent: '*', disallow: '/company-terms'},
          {userAgent: '*', disallow: '/contact-page-cover'},
          {userAgent: '*', disallow: '/contact-page'},
          {userAgent: '*', disallow: '/discover-new-colors'},
          {userAgent: '*', disallow: '/free-website-images'},
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
  ],
};
