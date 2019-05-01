import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import BackgroundContainer from '../components/BackgroundContainer';
import SectionContainer from '../components/SectionContainer';
import { slugify } from '../utilities/formatters';

const SponsorsContainer = styled.div`
  color: #fff;
  display: grid;
  grid-gap: 3rem;
  text-align: center;
  width: 100%;

  a {
    color: #fff;
    text-decoration: none;

    &:visited {
      color: #fff;
    }
  }

  @media screen and (min-width: 530px) {
    grid-template: repeat(3, auto) / repeat(12, 1fr);
    & div:nth-child(-n + 3) {
      grid-column: span 4;

      h4 {
        font-size: 1.8rem;
      }

      li {
        font-size: 1.2rem;
      }
    }

    & div:nth-child(n + 4):nth-child(-n + 7) {
      grid-column: span 6;

      h4 {
        font-size: 1.6rem;
      }
    }
  }
`;

const Heading = styled.h3`
  color: ${props => props.theme.yellow};
  font-family: ${props => props.theme.fontFamilies.lato};
  font-size: calc(2rem + 3vw);
  font-style: normal;
  text-align: center;
  text-transform: uppercase;
`;

const Sponsors = () => {
  const data = useStaticQuery(graphql`
    query SponsorsQuery {
      allSponsorsYaml {
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
    <BackgroundContainer bg="black" id="sponsors">
      <SectionContainer>
        <Heading>Sponsors</Heading>
        <SponsorsContainer>
          {data.allSponsorsYaml.edges.map(({ node }) => (
            <div key={`previous-sponsor-level-${slugify(node.level)}`}>
              <h4>{node.level}</h4>
              {node.sponsors && (
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
              )}
            </div>
          ))}
        </SponsorsContainer>
      </SectionContainer>
    </BackgroundContainer>
  );
};

export default Sponsors;
