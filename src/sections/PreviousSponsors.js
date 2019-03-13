import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import BackgroundContainer from '../components/BackgroundContainer';
import SectionContainer from '../components/SectionContainer';
import { slugify } from '../utilities/formatters';

const PreviousSponsorsContainer = styled(SectionContainer)`
  color: #fff;
  grid-gap: 3rem;
  grid-template: repeat(3, auto) / repeat(12, 1fr);
  text-align: center;

  & div:nth-child(-n + 3) {
    grid-column: span 4;
  }

  & div:nth-child(n + 4):nth-child(-n + 7) {
    grid-column: span 6;
  }
`;

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
    <BackgroundContainer bg="black">
      <PreviousSponsorsContainer>
        {data.allPreviousSponsorsYaml.edges.map(({ node }) => (
          <div>
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
          </div>
        ))}
      </PreviousSponsorsContainer>
    </BackgroundContainer>
  );
};

export default PreviousSponsors;
