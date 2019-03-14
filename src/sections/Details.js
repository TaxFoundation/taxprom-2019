import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BackgroundColorContainer from '../components/BackgroundContainer';
import SectionContainer from '../components/SectionContainer';
import PhotoA from '../images/hodge-speaks.jpg';
import PhotoB from '../images/angus-speaks.jpg';
import PhotoC from '../images/table.jpg';
import PhotoD from '../images/three-men.jpg';

const TaglineContainer = styled(SectionContainer)`
  padding: 2rem 3rem;

  @media (min-width: 500px) {
    padding: 5rem 9rem;
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

  @media (min-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 25vh);
  }
`;

const Photo = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: 50% 50%;
`;

const Details = ({ details, id }) => (
  <Fragment>
    <BackgroundColorContainer bg="black" color="white">
      <TaglineContainer>
        <h2>Celebrating 82 Years of Promoting Better Tax Policy</h2>
        <p>
          Since our founding in 1937, the Tax Foundation has been the nation’s
          leading independent tax policy nonprofits. Our principled research,
          insightful analysis, and engaged experts have informed smarter tax
          policy at the federal, state, and global levels.
        </p>
        <p>
          Our aim in our interactions with policymakers at every level is to
          guide them towards tax policies that are pro-growth, pro-investment,
          pro-jobs, and hospitable to the private sector.
        </p>
        <p>
          For 82 years, the Tax Foundation’s annual dinner has been an
          institution for the tax community’s best, brightest, and most
          influential. Join us Thursday, November 21st for our 82nd annual Tax
          Prom, and find out why hundreds of people say this is the tax world’s
          most celebrated event of the year.
        </p>
      </TaglineContainer>
    </BackgroundColorContainer>
    <BackgroundColorContainer bg="black" color="white">
      <PhotoGrid>
        <Photo src={PhotoA} />
        <Photo src={PhotoB} />
        <Photo src={PhotoC} />
        <Photo src={PhotoD} />
      </PhotoGrid>
    </BackgroundColorContainer>
    <BackgroundColorContainer bg="black" color="white">
      <div id={id}>
        <SectionContainer>
          <h3>Why You Can't Miss Tax Prom</h3>
          <DetailsList>
            {details.detailsBullets.map((d, i) => (
              <li key={`detail-${i}`}>{d}</li>
            ))}
          </DetailsList>
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
      </div>
    </BackgroundColorContainer>
  </Fragment>
);

Details.propTypes = {
  details: PropTypes.object,
  id: PropTypes.string,
};

export default Details;
