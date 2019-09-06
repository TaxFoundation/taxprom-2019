import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import BackgroundContainer from '../components/BackgroundContainer';
import SectionContainer from '../components/SectionContainer';

const Heading = styled.h2`
  color: ${props => props.theme.yellow};
  font-family: ${props => props.theme.fontFamilies.lato};
  font-size: calc(1rem + 3vw);
  font-style: normal;
  text-align: center;
  text-transform: uppercase;
`;

const Awardee = styled.div`
  color: ${props => props.theme.white};
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding-bottom: 1rem;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  p {
    padding-bottom: 1rem;
  }
`;

const AwardeeHeading = styled.h3`
  font-size: calc(1rem + 2.6vw);
  padding-bottom: 2rem;
  text-align: center;
`;

const AwardeeImg = styled(Img)`
  background-color: ${props => props.theme.black};

  & > img {
    object-fit: cover !important;
    object-position: 50% 50% !important;
    font-family: 'object-fit: cover !important; object-position: 50% 50% !important;';
  }
`;

const Awardees = () => {
  const BartholdImg = useStaticQuery(graphql`
    query BartholdImg {
      BartholdImg: file(relativePath: { eq: "barthold.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <BackgroundContainer bg="black" id="awardees">
      <SectionContainer>
        <Heading>Tax Foundation’s Distinguished Service Awards</Heading>
        <AwardeeHeading>Thomas A. Barthold</AwardeeHeading>
        <Awardee>
          <AwardeeImg fluid={BartholdImg.BartholdImg.childImageSharp.fluid} />
          <div>
            <p>
              Thomas A. Barthold is the chief of staff of the Joint Committee on
              Taxation.
            </p>
            <p>
              Mr. Barthold joined the Joint Committee staff as a staff economist
              in 1987. He subsequently has served as senior economist, deputy
              chief of staff, and acting chief of staff. He was named chief of
              staff in May 2009. Over the past three decades he has worked on a
              wide variety of issues for the committee, including capital gains
              taxation, savings incentives, environmental and energy taxes,
              estate and gift taxation, the taxation of multinational
              enterprises, the low-income housing tax credit, tax-exempt bonds,
              and tax-exempt organizations.
            </p>
            <p>
              Prior to his arrival in Washington he was a member of the
              economics faculty of Dartmouth College, Hanover, New Hampshire.
              His publications include studies of capital gain realizations,
              charitable bequests, and measuring the distribution of the tax
              burden. Mr. Barthold is a graduate of Northwestern University and
              received his doctorate in economics from Harvard University.
            </p>
            <p>
              For his work at the Joint Committee on Taxation the Tax Council
              Policy Institute has awarded Mr. Barthold its “Pillar of
              Excellence” and the National Tax Association has awarded Mr.
              Barthold its “Bruce Davie - Albert Davis Public Service Award.”
            </p>
          </div>
        </Awardee>
      </SectionContainer>
    </BackgroundContainer>
  );
};

export default Awardees;
