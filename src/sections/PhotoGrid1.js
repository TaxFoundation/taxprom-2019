import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import BackgroundContainer from '../components/BackgroundContainer';
import { PhotoGrid, Photo } from '../components/PhotoGrid';

const PhotoGrid1 = () => {
  const images = useStaticQuery(graphql`
    query PhotoGrid1mages {
      hodge: file(relativePath: { eq: "hodge-speaks.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      angus: file(relativePath: { eq: "angus-speaks.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      overhead: file(relativePath: { eq: "overhead.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      threeMen: file(relativePath: { eq: "three-men.jpg" }) {
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
        <Photo fluid={images.angus.childImageSharp.fluid} />
        <Photo fluid={images.overhead.childImageSharp.fluid} />
        <Photo fluid={images.threeMen.childImageSharp.fluid} />
      </PhotoGrid>
    </BackgroundContainer>
  );
};

export default PhotoGrid1;
