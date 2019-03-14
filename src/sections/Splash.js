import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { fullDate } from '../utilities/formatters';
import { TaxProm } from '../components/Icons';
// import splash from '../images/splash.jpg';

const SplashContainer = styled.div`
  position: relative;
`;

const Background = styled(Img)`
  background-color: ${props => props.theme.black};
  bottom: 0;
  height: 100vh;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;

  & > img {
    object-fit: cover !important;
    object-position: 50% 50% !important;
    font-family: 'object-fit: cover !important; object-position: 50% 50% !important;';
  }
`;

const SplashContent = styled.section`
  align-content: center;
  align-items: center;
  background: transparent;
  bottom: 0;
  color: #fff;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  height: 100vh;
  justify-content: center;
  justify-items: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const TaxPromContainer = styled.div`
  margin-bottom: 1rem;
  max-width: 900px;
  width: 100%;
`;

const InfoText = styled.p`
  font-size: 1.2rem;
  line-height: 1.2;
  margin: 0;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
`;

const SectionLink = styled.a`
  background-color: ${props => props.theme.blue};
  border-radius: 4px;
  color: #fff;
  font-size: 1.4rem;
  line-height: 1.2;
  margin: 3rem 0 0;
  padding: 0.5rem 1rem;
  text-decoration: none;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s cubic-bezier(0.19, 1, 0.22, 1);

  &:hover,
  &:focus,
  &:visited {
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    background-color: ${props => props.theme.secondary};
  }
`;

const Splash = ({ date, venueName, showVideo }) => {
  const splashImg = useStaticQuery(graphql`
    query SplashImg {
      splashImg: file(relativePath: { eq: "splash.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <SplashContainer>
      <Background fluid={splashImg.splashImg.childImageSharp.fluid} />
      <SplashContent id="home">
        <TaxPromContainer>
          <TaxProm />
        </TaxPromContainer>
        <InfoText>{fullDate(new Date(date))}</InfoText>
        <InfoText>{venueName}</InfoText>
        {showVideo ? (
          <SectionLink href="#video">Watch 2018 Recap</SectionLink>
        ) : null}
      </SplashContent>
    </SplashContainer>
  );
};

Splash.propTypes = {
  date: PropTypes.string,
  venueName: PropTypes.string,
  showVideo: PropTypes.bool,
};

export default Splash;
