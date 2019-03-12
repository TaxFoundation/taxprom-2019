import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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
            <li>
              <a href={sponsor.link} rel="noopener noreferrer" target="_blank">
                {sponsor.name}
              </a>
            </li>
          ) : (
            <li>{sponsor.name}</li>
          )
        )}
    </ul>
  );
};

export default PreviousSponsors;
