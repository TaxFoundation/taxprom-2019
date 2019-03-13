import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { slugify } from '../utilities/formatters';

const PreviousSponsors = () => {
  const data = useStaticQuery(graphql`
    query PreviousSponsorsQuery {
      allPreviousSponsorsYaml {
        edges {
          node {
            level
            sponsors {
              name
              link
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {data.allPreviousSponsorsYaml.edges.map(({ node }) => (
        <>
          <h4>{node.level}</h4>
          <ul>
            {node.sponsors.map(sponsor =>
              sponsor.link ? (
                <li key={`previous-sponsor-${slugify(sponsor.name)}`}>
                  <a
                    href={sponsor.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
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
        </>
      ))}
    </>
  );
};

export default PreviousSponsors;
