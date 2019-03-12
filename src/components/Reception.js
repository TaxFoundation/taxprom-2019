import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import SponsorLevel from './SponsorLevel';
import { dollars, slugify } from '../utilities/formatters';

const ReceptionBox = styled(SponsorLevel)`
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

const Reception = ({ reception, id }) => (
  <ReceptionBox bg={reception.bg} color={reception.color}>
    <h4 className="sponsorship__title">{reception.name}</h4>
    <p className="sponsorship__price">{dollars(reception.price)}</p>
    <ul className="sponsorship__benefits">
      {reception.benefits.map((b, i) => (
        <li key={`${id}-${i}`}>{b}</li>
      ))}
    </ul>
    <Link
      className="sponsorship__pledge"
      to={`/join-tax-prom/${slugify(reception.name)}`}
    >
      {`Sponsor the ${reception.name}`}
    </Link>
  </ReceptionBox>
);

Reception.propTypes = {
  reception: PropTypes.object,
  id: PropTypes.string,
};

export default Reception;
