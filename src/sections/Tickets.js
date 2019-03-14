import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import BackgroundContainer from '../components/BackgroundContainer';
import SectionContainer from '../components/SectionContainer';
import Ticket from '../components/Ticket';
import { slugify } from '../utilities/formatters';
import taxprom from '../../data/taxprom.json';

const Container = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding-bottom: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Heading = styled.div`
  color: ${props => props.theme.yellow};
  font-family: ${props => props.theme.fontFamilies.lato};
  font-size: calc(1rem + 3vw);
  font-style: normal;
  padding-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
`;

const Tickets = () => {
  let priceType = 'earlyPrice';
  const now = Date.now();
  if (now > new Date(taxprom.regularPriceEnds)) {
    priceType = 'latePrice';
  } else if (now > new Date(taxprom.earlyPriceEnds)) {
    priceType = 'regularPrice';
  }

  const data = useStaticQuery(graphql`
    query TicketsQuery {
      allTicketsYaml {
        edges {
          node {
            name
            price
            benefits
          }
        }
      }
    }
  `);

  return (
    <div id="tickets">
      <BackgroundContainer bg="black" color="blueLight">
        <SectionContainer>
          <Heading>Individual Tickets</Heading>
          <Container>
            {data.allTicketsYaml.edges.map(({ node: ticket }) => (
              <Ticket
                key={`ticket-${slugify(ticket.name)}`}
                id={`ticket-${slugify(ticket.name)}`}
                ticket={ticket}
              />
            ))}
          </Container>
        </SectionContainer>
      </BackgroundContainer>
    </div>
  );
};

export default Tickets;
