import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { slugify } from '../utilities/formatters';

const PreviousSponsors = () => {
  const data = useStaticQuery(graphql`
    query PreviousSponsorsQuery {
      allPreviousSponsorsYaml {
        edges {
          node {
            name
            link
          }
        }
      }
    }
  `);

  return (
    <ul>
      {data.allPreviousSponsorsYaml.edges
        .sort((a, b) => a.node.name > b.node.name)
        .map(({ node: sponsor }) =>
          sponsor.link ? (
            <li key={`previous-sponsor-${slugify(sponsor.name)}`}>
              <a href={sponsor.link} rel="noopener noreferrer" target="_blank">
                {sponsor.name}
              </a>
            </li>
          ) : (
            <li key={`previous-sponsor-${slugify(sponsor.name)}`}>
              {sponsor.name}
            </li>
          )
        )}
    </ul>
  );
};

export default PreviousSponsors;
