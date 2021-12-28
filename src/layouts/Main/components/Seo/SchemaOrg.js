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
        "@context" : "https://schema.org",
        "@type" : "Organization",
        "@id": organization.url,
        url: organization.url,
        name: organization.name,
        description: description,
        email: organization.email,
        sameAs: organization.otherUrls,
        image: image,
        "logo": [{
          "@type": "ImageObject",
          name: 'logo',
          "url": organization.logo,
        }],
        "brand": {
          "@type": "Brand",
          name: organization.name,
          url: organization.url,
          logo: organization.logo,
        },
        "contactPoint" : [
          { "@type" : "ContactPoint",
            "telephone" : "+1-707-266-8106",
            "contactType" : "customer service",
            "areaServed" : "US",
            "availableLanguage" : "English",
          }
        ]
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
