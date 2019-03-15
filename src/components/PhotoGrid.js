import styled from 'styled-components';
import Img from 'gatsby-image';

export const PhotoGrid = styled.div`
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

export const Photo = styled(Img)`
  background-color: ${props => props.theme.black};

  & > img {
    object-fit: cover !important;
    object-position: 50% 50% !important;
    font-family: 'object-fit: cover !important; object-position: 50% 50% !important;';
  }
`;
