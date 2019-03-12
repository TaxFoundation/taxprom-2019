import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import taxprom from '../../data/taxprom.json';
import SponsorLevel from './SponsorLevel';
import { dollars, slugify, fullDate } from '../utilities/formatters';

const TableBox = styled(SponsorLevel)`
  background-color: ${props => props.theme[props.bg]};
  color: ${props => props.theme[props.color]};

  .sponsorship__title {
    color: ${props => props.theme[props.color]};
    font-family: ${props => props.theme.fontFamilies.lato};
    font-size: calc(2rem + 2vw);
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

const Table = ({ table, id, priceType }) => (
  <TableBox bg={table.bg} color={table.color}>
    <h4 className="sponsorship__title">{table.name}</h4>
    <p className="sponsorship__price">{dollars(table[priceType])}</p>
    {priceType !== 'latePrice' ? (
      <p
        style={{ fontSize: '0.8rem', fontStyle: 'italic', textAlign: 'center' }}
      >
        Price will increase after{' '}
        {fullDate(new Date(taxprom[`${priceType}Ends`]))}.
      </p>
    ) : null}
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
  priceType: PropTypes.number,
};

export default Table;
