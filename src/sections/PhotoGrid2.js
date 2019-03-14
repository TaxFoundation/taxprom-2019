import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import BackgroundContainer from '../components/BackgroundContainer';

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 25vh);

  @media (min-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 30vh);
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

const PhotoGrid2 = () => {
  const images = useStaticQuery(graphql`
    query PhotGrid2Images {
      hodge: file(relativePath: { eq: "hodge-stage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      twoMen: file(relativePath: { eq: "two-men.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      weinberger: file(relativePath: { eq: "weinberger.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      vogler: file(relativePath: { eq: "vogler-speaks.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <BackgroundContainer bg="black" color="white">
      <PhotoGrid>
        <Photo fluid={images.hodge.childImageSharp.fluid} />
        <Photo fluid={images.twoMen.childImageSharp.fluid} />
        <Photo fluid={images.weinberger.childImageSharp.fluid} />
        <Photo fluid={images.vogler.childImageSharp.fluid} />
      </PhotoGrid>
    </BackgroundContainer>
  );
};

PhotoGrid2.propTypes = {
  details: PropTypes.object,
  id: PropTypes.string,
};

export default PhotoGrid2;
