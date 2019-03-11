import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import scrollToElement from 'scroll-to-element';
import { Link } from 'gatsby';
import { Logo, MenuIcon, CloseIcon } from '../components/Icons';

const StyledHeader = styled.header`
  align-content: space-between;
  align-items: end;
  background-color: ${props =>
    props.backgroundColor ? props.theme.black : 'transparent'};
  display: grid;
  grid-template: auto / auto 1fr auto;
  left: 0;
  padding: 16px;
  position: fixed;
  right: 0;
  top: 0;
  transition: background-color 0.3s ease-in-out;
  z-index: 20;
`;

const LogoLink = styled.a`
  display: block;
  height: 24px;
  grid-column: 1 /2;
`;

const MenuLink = styled.div`
  align-self: end;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  grid-column: 3 / 4;
  height: 24px;
  justify-self: end;
`;

const CloseLink = styled.div`
  align-self: center;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  height: 24px;
  justify-self: end;
  margin-right: 1rem;
`;

const Menu = styled.div`
  align-content: start;
  background-color: ${props => props.theme.black};
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 56px auto;
  overflow-y: auto;
  position: fixed;
  right: 0;
  transform: translateX(${props => (props.show ? '0' : '100%')});
  transition: box-shadow 0.1s linear, transform 0.2s ease-in-out;
  top: 0;
  width: 100%;
  z-index: 100;

  @media (min-width: 500px) {
    box-shadow: ${props => (props.show ? '-3px 0 5px' : '3px 0 0')}
      rgba(0, 0, 0, 0.3);
    width: 300px;
  }
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.blueLight};
  padding: 2rem;
  text-decoration: none;
  transition: background 0.1s ease-in, color 0.1s ease-in;

  &:active,
  &:focus,
  &:hover {
    background-color: ${props => props.theme.blue};
    color: ${props => props.theme.white};
  }
`;

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [color, setColor] = useState(false);

  useEffect(() => {
    function handleHeaderBG(e) {
      if (window.scrollY > 30) {
        setColor(true);
      } else if (color && window.scrollY <= 30) {
        setColor(false);
      }
    }
    window.addEventListener('scroll', handleHeaderBG);

    return () => window.removeEventListener('scroll', handleHeaderBG);
  }, [window.scrollY]);

  const goToSection = id => {
    scrollToElement(document.getElementById(id), { offset: -56 });
    setMenu(!menu);
  };

  return (
    <StyledHeader backgroundColor={color}>
      <LogoLink href="https://taxfoundation.org">
        <Logo fill="#fff" />
      </LogoLink>
      <MenuLink onClick={() => setMenu(!menu)}>
        <MenuIcon fill="#fff" />
      </MenuLink>
      <Menu show={menu}>
        <CloseLink onClick={() => setMenu(!menu)}>
          <CloseIcon />
        </CloseLink>
        {/* {this.props.routes.map(r => {
          return r.show ? (
            <StyledLink key={`nav-${r.slug}`} to={`/${r.slug}`} onClick={e => this.goToSection(r.slug)}>
              {r.name}
            </StyledLink>
          ) : null;
        })} */}
        <StyledLink to="/contact" onClick={() => setMenu(!menu)}>
          Contact
        </StyledLink>
      </Menu>
    </StyledHeader>
  );
};

export default Header;
