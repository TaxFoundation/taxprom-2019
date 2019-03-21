/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import taxprom from '../../data/taxprom.json';
import { slugify } from '../utilities/formatters';

function SEO({ description, lang, meta, keywords, title, image }) {
  const { site, allTicketsYaml } = useStaticQuery(graphql`
    query SchemaQuery {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          siteMetaImage
        }
      }
      allTicketsYaml {
        edges {
          node {
            name
            price
            bg
            color
            benefits
          }
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;

  const offers = allTicketsYaml.edges.map(({ node: ticket }) => ({
    '@type': 'Offer',
    name: ticket.name,
    url: `${site.siteMetadata.siteUrl}/join-tax-prom/${slugify(ticket.name)}`,
    price: ticket.price,
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    validFrom: '2019-03-18T09:00:00-0400',
  }));

  const theSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: site.siteMetadata.title,
    startDate: taxprom.date,
    endDate: taxprom.endDate,
    location: {
      '@type': 'Place',
      name: taxprom.venueName,
      address: {
        '@type': 'PostalAddress',
        streetAddress: taxprom.streetAddress,
        addressLocality: taxprom.city,
        postalCode: taxprom.zip,
        addressRegion: taxprom.state,
        addressCountry: 'US',
      },
    },
    image: [`${site.siteMetadata.siteUrl}${site.siteMetadata.siteMetaImage}`],
    description: site.siteMetadata.description,
    offers,
    performer: {
      '@type': 'Person',
      name: 'Scott Hodge',
      sameAs: 'https://taxfoundation.org/staff/scott-hodge/',
    },
  };

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`${site.siteMetadata.title} | %s`}
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
            name: 'og:image',
            content: `${site.siteMetadata.siteUrl}${image ||
              site.siteMetadata.siteMetaImage}`,
          },
          {
            name: 'og:url',
            content: site.siteMetadata.siteUrl,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
          {
            name: 'twitter:image',
            content: `${site.siteMetadata.siteUrl}${image ||
              site.siteMetadata.siteMetaImage}`,
          },
        ]
          .concat(
            keywords.length > 0
              ? {
                  name: `keywords`,
                  content: keywords.join(`, `),
                }
              : []
          )
          .concat(meta)}
      >
        <script type="application/ld+json">{JSON.stringify(theSchema)}</script>
      </Helmet>
    </>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default SEO;
