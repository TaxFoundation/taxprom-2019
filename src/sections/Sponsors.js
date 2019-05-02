import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import BackgroundContainer from '../components/BackgroundContainer';
import SectionContainer from '../components/SectionContainer';
import { slugify } from '../utilities/formatters';

const ReceptionsContainer = styled.div`
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
    grid-template: auto / repeat(3, 1fr);
    & div {
      grid-column: span 4;

      h4 {
        font-size: 1.8rem;
      }

      li {
        font-size: 1.2rem;
      }
    }
  }
`;

const TablesContainer = styled.div`
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
    grid-template: repeat(2, auto) / repeat(2, 1fr);

    & div {
      grid-column: span 1;

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

const SponsorList = ({ node }) => (
  <div>
    <h4>{node.level}</h4>
    <ul>
      {node.sponsors.map(sponsor =>
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
  </div>
);

SponsorList.propTypes = {
  node: PropTypes.object,
};

const Sponsors = () => {
  const data = useStaticQuery(graphql`
    query SponsorsQuery {
      allSponsorsYaml {
        edges {
          node {
            level
            isReception
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
        <ReceptionsContainer>
          {data.allSponsorsYaml.edges
            .filter(({ node }) => node.isReception)
            .map(
              ({ node }) =>
                node.sponsors && (
                  <SponsorList
                    key={`sponsor-${slugify(node.level)}`}
                    node={node}
                  />
                )
            )}
        </ReceptionsContainer>
        <TablesContainer>
          {data.allSponsorsYaml.edges
            .filter(({ node }) => !node.isReception)
            .map(
              ({ node }) =>
                !node.isReception &&
                node.sponsors && (
                  <SponsorList
                    key={`sponsor-${slugify(node.level)}`}
                    node={node}
                  />
                )
            )}
        </TablesContainer>
      </SectionContainer>
    </BackgroundContainer>
  );
};

export default Sponsors;
