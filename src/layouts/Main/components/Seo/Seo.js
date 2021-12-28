import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import SchemaOrg from './SchemaOrg'
import { useLocation } from "@reach/router"

//Build a solid online presence, showcase your brand & inspire action.
function SEO({ description, lang, meta, title, image, noindex, snippet, article }) {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle:title
            defaultDescription:description
            siteUrl
            defaultImage
            twitterUsername
            dateModified
            organization{
              email
              logo
              name
              otherUrls
              telephone
              url
            }
          }
        }
      }
    `
  )
  const {defaultTitle, defaultDescription, siteUrl, defaultImage, twitterUsername, dateModified, organization } = site.siteMetadata

  const { pathname } = useLocation()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    img: image || defaultImage,
    twitterUsername,
    url: `${siteUrl}/${pathname}`,
    organization,
  }


  return (
    <React.Fragment>
    <Helmet
      htmlAttributes={{lang: 'en'}}
      title={title ? `Ally Digital Solutions | ${seo.title}`: defaultTitle}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.img} />
      <meta name="facebook-domain-verification" content="5ebqill113nayj0tomnlii6luehjko" />

      {noindex && (<meta name="robots" content="noindex" />)}
      {snippet && (<script type="application/ld+json">{snippet}</script>)}


      {/* facebook card */}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {article ? <meta property="og:type" content="article" />:<meta property="og:type" content="website" /> }
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description}/>}
      {seo.img && <meta property="og:image" content={seo.img} />}

      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />

      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterUsername}/>
      <meta name="twitter:title" content={seo.title}/>
      <meta name="twitter:description" content={seo.description}/>
      <meta name="twitter:image" content={seo.img}/>

    </Helmet>

    <SchemaOrg
      description={seo.description}
      baseUrl={siteUrl}
      image={seo.img}
      dateModified={dateModified}
      organization={seo.organization}
    />
    </React.Fragment>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  snippet: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
  snippet: null,
  noindex: false,
}


export default SEO
