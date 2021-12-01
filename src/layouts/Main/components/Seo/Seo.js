import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
//import SchemaOrg from './SchemaOrg'
import { useLocation } from "@reach/router"

function SEO({ description, lang, meta, title, image}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
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

  //const seoImg = image || site.siteMetadata.defaultImage

  const { pathname } = useLocation()

  const url = `${site.siteMetadata.siteUrl}/${pathname}`

  const metaDescription = description || site.siteMetadata.description

  return (
    <React.Fragment>
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={(title.length < 31) ? `%s | ${site.siteMetadata.title}`: title}
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
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
