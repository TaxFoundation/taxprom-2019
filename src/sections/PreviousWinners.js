import React from 'react';
import styled from 'styled-components';

import BackgroundContainer from '../components/BackgroundContainer';
import SectionContainer from '../components/SectionContainer';

const Heading = styled.h3`
  color: ${props => props.theme.yellow};
  font-family: ${props => props.theme.fontFamilies.lato};
  font-size: calc(1rem + 3vw);
  font-style: normal;
  text-align: center;
  text-transform: uppercase;
`;

const WinnersText = styled.div`
  color: ${props => props.theme.white};

  p {
    margin-bottom: 1rem;
  }
`;

const LinkText = styled.a`
  background-color: ${props => props.theme.yellow};
  color: ${props => props.theme.blue};
  display: block;
  font-family: ${props => props.theme.fontFamilies.baskerville};
  font-style: italic;
  margin: 0 auto;
  max-width: 300px;
  padding: 1rem;
  text-align: center;
  text-decoration: none;

  &:active,
  &:focus,
  &:visited {
    color: ${props => props.theme.blue};
  }
`;

const PreviousSponsors = () => (
  <BackgroundContainer bg="black" id="previous">
    <SectionContainer>
      <Heading>Previous Award Winners</Heading>
      <WinnersText>
        <p>
          Since 1941, the Tax Foundation has honored public figures who show an
          extraordinary dedication to advancing sound tax policy.
        </p>
        <p>
          Previous recipients of Tax Foundation awards have included: Presidents
          Dwight Eisenhower and George W. Bush, Vice President Mike Pence,
          Senator Ron Wyden, Senator Max Baucus, Senator Orrin Hatch, and
          Representative Dave Camp.
        </p>
        <LinkText
          href="https://taxfoundation.org/past-recipients-tax-foundation-distinguished-service-award/"
          target="_blank"
          rel="noopener noreferrer"
        >
          See a full list of past honorees.
        </LinkText>
      </WinnersText>
    </SectionContainer>
  </BackgroundContainer>
);

export default PreviousSponsors;
