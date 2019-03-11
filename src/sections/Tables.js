import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import BackgroundContainer from '../components/BackgroundContainer';
import SectionContainer from '../components/SectionContainer';
import Table from '../components/Table';
import { slugify } from '../utilities/formatters';
import taxprom from '../../data/taxprom.json';

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding-bottom: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Sponsorships = () => {
  let priceType = 'earlyPrice';
  const now = Date.now();
  if (now > new Date(taxprom.regularPriceEnds)) {
    priceType = 'latePrice';
  } else if (now > new Date(taxprom.earlyPriceEnds)) {
    priceType = 'regularPrice';
  }

  const data = useStaticQuery(graphql`
    query TablesQuery {
      allTablesYaml {
        edges {
          node {
            name
            earlyPrice
            regularPrice
            latePrice
            bg
            color
            benefits
          }
        }
      }
    }
  `);

  return (
    <div id="tables">
      <BackgroundContainer bg="secondaryHighlight" color="primary">
        <SectionContainer>
          <h3>Sponsorships</h3>
          <Container>
            {data.allTablesYaml.edges.map(({ node: table }) => (
              <Table
                key={`table-${slugify(table.name)}`}
                id={`table-${slugify(table.name)}`}
                table={table}
                price={priceType}
              />
            ))}
          </Container>
        </SectionContainer>
      </BackgroundContainer>
    </div>
  );
};

export default Sponsorships;
