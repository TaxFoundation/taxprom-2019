import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import SponsorLevel from './SponsorLevel';
import { dollars, slugify } from '../utilities/formatters';

const TicketBox = styled(SponsorLevel)`
  background-color: ${props => props.theme[props.bg]};
  color: ${props => props.theme[props.color]};

  .sponsorship__title {
    color: ${props => props.theme[props.color]};
    font-family: ${props => props.theme.fontFamilies.lato};
    font-size: calc(2rem + 1.5vw);
  }

  .sponsorship__price {
    border: 0;
    font-family: ${props => props.theme.fontFamilies.baskerville};
    font-size: 1.6rem;
    font-style: italic;
    padding: 0;
  }

  .sponsorship__benefits {
    border-top: 1px solid ${props => props.theme[props.color]};
    padding-top: 1rem;
  }

  .sponsorship__pledge {
    background-color: ${props => props.theme[props.color]};
    color: ${props => props.theme[props.bg]};

    &:active,
    &:focus,
    &:visited {
      color: ${props => props.theme[props.bg]};
    }
  }
`;

const Ticket = ({ ticket, id }) => (
  <TicketBox bg={ticket.bg} color={ticket.color}>
    <h4 className="sponsorship__title">{ticket.name}</h4>
    <p className="sponsorship__price">{dollars(ticket.price)}</p>
    <ul className="sponsorship__benefits">
      {ticket.benefits.map((b, i) => (
        <li key={`${id}-${i}`}>{b}</li>
      ))}
    </ul>
    <Link
      className="sponsorship__pledge"
      to={`/join-tax-prom/${slugify(ticket.name)}`}
    >
      {`Buy a ${ticket.name}`}
    </Link>
  </TicketBox>
);

Ticket.propTypes = {
  ticket: PropTypes.object,
  id: PropTypes.string,
};

export default Ticket;
