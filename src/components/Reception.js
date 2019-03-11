import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import SponsorLevel from './SponsorLevel';
import { dollars, slugify } from '../utilities/formatters';

const PackageBox = SponsorLevel.extend`
  background-color: ${props => props.theme.secondary};
  color: #fff;
`;

const Package = ({ reception }) => (
  <PackageBox>
    <h4 className="sponsorship__title">{reception.name}</h4>
    <p className="sponsorship__price">{dollars(reception.price)}</p>
    <ul className="sponsorship__benefits">
      {reception.benefits.map((b, i) => (
        <li key={`${slugify(reception.name)}-${i}`}>{b}</li>
      ))}
    </ul>
    <Link
      className="sponsorship__pledge"
      to={`/join-tax-prom/${slugify(reception.name)}`}
    >
      {`Sponsor the ${reception.name}`}
    </Link>
  </PackageBox>
);

Package.propTypes = {
  reception: PropTypes.object,
};

export default Package;
