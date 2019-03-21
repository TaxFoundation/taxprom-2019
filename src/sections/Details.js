import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import BackgroundColorContainer from '../components/BackgroundContainer';
import SectionContainer from '../components/SectionContainer';
import PhotoGrid1 from './PhotoGrid1';

const TaglineContainer = styled(SectionContainer)`
  padding: 2rem 1rem;

  @media (min-width: 500px) {
    padding: 5rem 0;
  }

  p {
    padding-bottom: 1rem;
  }
`;

const DetailsList = styled.ul`
  display: grid;
  grid-gap: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  padding: 1rem 0;
`;

const StatisticsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);

  @media (min-width: 860px) {
    grid-template-columns: repeat(${props => props.statsNumber}, 1fr);
  }
`;

const StatisticItem = styled.li`
  background-color: ${props => props.theme[props.color]};
  line-height: 1.6;
  padding: 1rem 2rem;
  text-align: center;
`;

const StatisticsNumber = styled.p`
  font-family: ${props => props.theme.fontFamilies.lato};
  font-size: 4rem;
  font-weight: 700;
`;

const StatisticsText = styled.p`
  font-family: ${props => props.theme.fontFamilies.baskerville};
  font-size: 1.2rem;
  font-style: italic;
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 25vh);

  @media (min-width: 1000px) and (max-width: 1659px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 30vh);
  }

  @media screen and (min-width: 1660px) {
    grid-template-rows: repeat(2, 50vh);
  }
`;

const Photo = styled(Img)`
  background-color: ${props => props.theme.black};

  & > img {
    object-fit: cover !important;
    object-position: 50% 50% !important;
    font-family: 'object-fit: cover !important; object-position: 50% 50% !important;';
  }
`;

const Details = ({ details, id }) => (
  <>
    <BackgroundColorContainer bg="black" color="white">
      <TaglineContainer id={id} maxWidth={600}>
        <h2>Bringing Together Today’s Tax Leaders</h2>
        <p>
          For 82 years, Tax Prom has been the must-attend event for the tax
          world’s best, brightest, and most influential.
        </p>
        <p>
          From Capitol Hill tax writers to VPs of tax at Fortune 500 companies,
          Tax Prom is the one night a year that brings together every major tax
          policy decision-maker in the country.
        </p>
        <p>
          Join us Thursday, November 21st and find out why Tax Prom is an event
          you can’t afford to miss.
        </p>
      </TaglineContainer>
    </BackgroundColorContainer>
    <BackgroundColorContainer bg="black" color="white">
      <PhotoGrid1 />
    </BackgroundColorContainer>
    <BackgroundColorContainer bg="black" color="white">
      <SectionContainer maxWidth={600}>
        <h3>Why You Can't Miss Tax Prom</h3>
        <DetailsList>
          {details.detailsBullets.map((d, i) => (
            <li key={`detail-${i}`}>{d}</li>
          ))}
        </DetailsList>
      </SectionContainer>
      <SectionContainer>
        <h4>In 2018 Tax Prom was Joined By</h4>
        <StatisticsList statsNumber={details.detailsStatistics.length}>
          {details.detailsStatistics.map((d, i) => (
            <StatisticItem key={`stat-${i}`} color={d.color}>
              <StatisticsNumber>{d.number}</StatisticsNumber>
              <StatisticsText>{d.text}</StatisticsText>
            </StatisticItem>
          ))}
        </StatisticsList>
      </SectionContainer>
    </BackgroundColorContainer>
  </>
);

Details.propTypes = {
  details: PropTypes.object,
  id: PropTypes.string,
};

export default Details;
