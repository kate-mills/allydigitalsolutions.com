import React from 'react'
import  navLinks from 'layouts/navigation'
import { Helmet } from 'react-helmet'

export default React.memo(
  ({
    url,
    image,
    description,
    baseUrl,
    organization,
    dateModified,
  }) => {
  const linkCrumbs = navLinks.schema.map(link => {
      return {
        type: 'ListItem',
        name: link.title,
        position: link.id,
        item: `${baseUrl}${link.href}`,
        image,
      }
    })
    const baseSchema = [
      {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "@id": organization.url,
        url: organization.url,
        description: description,
        email: organization.email,
        image: image,
        logo: organization.logo,
        name: organization.name,
        priceRange: organization.priceRange,
        sameAs: organization.otherUrls,
        telephone: organization.telephone,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        name: 'navigation',
        itemListElement: linkCrumbs,
      },
    ]


    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
      </Helmet>
    )
  }
)
