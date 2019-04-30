import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import BackgroundContainer from '../components/BackgroundContainer';
import SectionContainer from '../components/SectionContainer';
import Reception from '../components/Reception';
import { slugify } from '../utilities/formatters';

const Container = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding-bottom: 1rem;

  @media (min-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Heading = styled.div`
  color: ${props => props.theme.yellow};
  font-family: ${props => props.theme.fontFamilies.lato};
  font-size: calc(2rem + 3vw);
  font-style: normal;
  padding-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
`;

const Sponsorships = () => {
  const data = useStaticQuery(graphql`
    query ReceptionsQuery {
      allReceptionsYaml {
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

  return (
    <div id="receptions">
      <BackgroundContainer bg="black" color="white">
        <SectionContainer>
          <Heading>Reception Sponsorships</Heading>
          <Container>
            {data.allReceptionsYaml.edges.map(({ node: reception }) => (
              <Reception
                key={`reception-${slugify(reception.name)}`}
                id={`reception-${slugify(reception.name)}`}
                reception={reception}
              />
            ))}
          </Container>
        </SectionContainer>
      </BackgroundContainer>
    </div>
  );
};

export default Sponsorships;
