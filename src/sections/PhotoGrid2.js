import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import BackgroundContainer from '../components/BackgroundContainer';
import { PhotoGrid, Photo } from '../components/PhotoGrid';

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
      bill: file(relativePath: { eq: "bill.jpg" }) {
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
        <Photo fluid={images.bill.childImageSharp.fluid} />
      </PhotoGrid>
    </BackgroundContainer>
  );
};

export default PhotoGrid2;
