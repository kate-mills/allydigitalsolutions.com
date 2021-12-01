import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
//import SchemaOrg from './SchemaOrg'
import { useLocation } from "@reach/router"

//Build a solid online presence, showcase your brand & inspire action.
function SEO({ description, lang, meta, title, image}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle:title
            description
            author
            twitterUsername
            siteUrl
            defaultImage
          }
        }
      }
    `
  )

  const seoImg = image || site.siteMetadata.defaultImage
  const { pathname } = useLocation()
  const url = `${site.siteMetadata.siteUrl}/${pathname}`
  const metaDescription = description || site.siteMetadata.description

  return (
    <React.Fragment>
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={(title.length > 0) ? title : site.siteMetadata.defaultTitle }

      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitterUsernamer,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
    </React.Fragment>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
