import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import BackgroundContainer from '../components/BackgroundContainer';
import SectionContainer from '../components/SectionContainer';
import { slugify } from '../utilities/formatters';

const PreviousSponsorsContainer = styled.div`
  color: #fff;
  display: grid;
  grid-gap: 3rem;
  grid-template: repeat(3, auto) / repeat(12, 1fr);
  text-align: center;
  width: 100%;

  & div:nth-child(-n + 3) {
    grid-column: span 4;

    h4 {
      font-size: 1.6rem;
    }

    li {
      font-size: 1.2rem;
    }
  }

  & div:nth-child(n + 4):nth-child(-n + 7) {
    grid-column: span 6;
  }

  a {
    color: #fff;
    text-decoration: none;

    &:visited {
      color: #fff;
    }
  }
`;

const Heading = styled.h3`
  color: ${props => props.theme.yellow};
  font-family: ${props => props.theme.fontFamilies.lato};
  font-size: 3rem;
  font-style: normal;
  text-align: center;
  text-transform: uppercase;
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
    <BackgroundContainer bg="black" id="previous">
      <SectionContainer>
        <Heading>Previous Sponsors</Heading>
        <PreviousSponsorsContainer>
          {data.allPreviousSponsorsYaml.edges.map(({ node }) => (
            <div key={`previous-sponsor-level-${slugify(node.level)}`}>
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
      </SectionContainer>
    </BackgroundContainer>
  );
};

export default PreviousSponsors;
