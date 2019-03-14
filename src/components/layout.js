import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import Theme from '../Theme';
import Header from '../sections/Header';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html,
  body {
    font-family: ${props => props.theme.fontFamilies.proxima};
    font-size: ${props => props.theme.fontSize};
    font-weight: ${props => props.theme.fontWeight};
    height: 100%;
    line-height: 1.6;
  }

  /* h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: center;
  } */
  
  h1 {
    color: ${props => props.theme.yellow};
    font-family: ${props => props.theme.fontFamilies.lato};
    font-size: calc(3 * ${props => props.theme.fontSize});
    line-height: 1.2;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  
  h2 {
    color: ${props => props.theme.blueLight};
    font-family: ${props => props.theme.fontFamilies.baskerville};
    font-size: calc(2.6 * ${props => props.theme.fontSize});
    font-style: italic;
    line-height: 1.4;
    margin-bottom: 1rem;
  }
  
  h3 {
    color: ${props => props.theme.blueLight};
    font-family: ${props => props.theme.fontFamilies.baskerville};
    font-size: calc(2 * ${props => props.theme.fontSize});
    font-style: italic;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  h4 {
    color: ${props => props.theme.blueLight};
    font-family: ${props => props.theme.fontFamilies.baskerville};
    font-size: calc(1.4 * ${props => props.theme.fontSize});
    font-style: italic;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={Theme}>
        <>
          <Reset />
          <GlobalStyle />
          <Header />
          <div>
            <main>{children}</main>
            <footer />
          </div>
        </>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
