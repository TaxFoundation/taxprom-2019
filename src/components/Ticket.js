import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import SponsorLevel from './SponsorLevel';
import { dollars, slugify } from '../utilities/formatters';

const TicketBox = styled(SponsorLevel)`
  background-color: ${props => props.theme[props.bg]};
  color: ${props => props.theme[props.color]};

  .sponsorship__price {
    border-bottom: 1px solid ${props => props.theme[props.color]};
  }
`;

const Ticket = ({ ticket, id, price }) => (
  <TicketBox>
    <h4 className="sponsorship__title">{ticket.name}</h4>
    <p className="sponsorship__price">{dollars(price)}</p>
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
  price: PropTypes.number,
};

export default Ticket;
