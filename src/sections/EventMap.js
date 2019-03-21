import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BackgroundContainer from '../components/BackgroundContainer';
import SectionContainer from '../components/SectionContainer';
import { fullDate } from '../utilities/formatters';

const InfoHeading = styled.h2`
  font-size: 1.8rem !important;
  line-height: 1.4 !important;
  text-align: center;
`;

const InfoDetails = styled.p`
  font-size: 1.4rem;
  text-align: center;
`;

const IframeContainer = styled.div`
  margin-top: 1rem;
  min-height: 400px;
  padding-bottom: 0.5rem;

  iframe {
    height: 400px;
    height: 100%;
    min-height: 400px;
    width: 100%;
  }
`;

const EventMap = ({
  date,
  time,
  id,
  venue,
  streetAddress,
  city,
  state,
  zip,
  url,
}) => (
  <BackgroundContainer bg="black" color="white" id={id}>
    <SectionContainer>
      <InfoHeading>{`${fullDate(new Date(date))}`}</InfoHeading>
      <InfoDetails>{`${time} at ${venue}`}</InfoDetails>
      <InfoDetails>{`${streetAddress}, ${city} ${state}, ${zip}`}</InfoDetails>
      <IframeContainer>
        <iframe src={url} allowFullScreen title="Map to Venue" />
      </IframeContainer>
    </SectionContainer>
  </BackgroundContainer>
);

EventMap.propTypes = {
  date: PropTypes.string,
  time: PropTypes.string,
  id: PropTypes.string,
  venue: PropTypes.string,
  streetAddress: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zip: PropTypes.number,
  url: PropTypes.string,
};

export default EventMap;
