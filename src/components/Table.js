import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import SponsorLevel from './SponsorLevel';
import { dollars, slugify } from '../utilities/formatters';

const TableBox = styled(SponsorLevel)`
  background-color: ${props => props.theme[props.bg]};
  color: ${props => props.theme[props.color]};

  .sponsorship__price {
    border-bottom: 1px solid ${props => props.theme[props.color]};
  }

  .sponsorship__pledge {
    background-color: ${props => props.theme[props.color]};
    color: ${props => props.theme[props.color]};

    &:active,
    &:focus,
    &:visited {
      color: ${props => props.theme[props.color]};
    }
  }
`;

const Table = ({ table, id, price }) => (
  <TableBox bg={table.color}>
    <h4 className="sponsorship__title">{table.name}</h4>
    <p className="sponsorship__price">{dollars(table[price])}</p>
    <ul className="sponsorship__benefits">
      {table.benefits.map((b, i) => (
        <li key={`${id}-${i}`}>{b}</li>
      ))}
    </ul>
    <Link
      className="sponsorship__pledge"
      to={`/join-tax-prom/${slugify(table.name)}`}
    >
      {`Sponsor a ${table.name} Table`}
    </Link>
  </TableBox>
);

Table.propTypes = {
  table: PropTypes.object,
  id: PropTypes.string,
  price: PropTypes.number,
};

export default Table;
