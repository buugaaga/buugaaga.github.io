import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import styled from 'styled-components';

import { MenuContext } from '../../context/navState';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { HamburgerButton } from './HamburgerButton';
import { LinksLogo } from './LinksLogo';
import { SSpanRu, SSpanEn } from '../SSpan';

const StyledNav = styled.nav`
  
  padding-left: 40px;
  background-color: white;
  width: 100%;
  z-index: 9999;
  button {
    margin-left: -40px;
  }
  li {
    list-style: none;
    a {
      text-decoration: none;
      font-size: 18px;
      line-height: 1em;
      color: blue;
      font-weight: 500;
    :hover {
      color: lightblue;
    }
    }
  }
`;

export function NavBar({language}) {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  const node = useRef();
  useOnClickOutside(node, () => {
    if (isMenuOpen) toggleMenuMode()
  });
  return (   
    <StyledNav ref={node}>
      <HamburgerButton />
      <Collapse in={isMenuOpen}>
        <div>
          <ul>
            <li>
              <Link to="/">
                <SSpanRu ru={language}>Домашняя страница</SSpanRu>
                <SSpanEn en={language}>Home page</SSpanEn>
              </Link>
            </li>
            <li>
              <Link to="/works">
                <SSpanRu ru={language}>Мои работы</SSpanRu>
                <SSpanEn en={language}>My works</SSpanEn>
              </Link>
            </li>
            <li>
              <Link to="/contacts">
                <SSpanRu ru={language}>Связаться со мной</SSpanRu>
                <SSpanEn en={language}>Contact with me</SSpanEn>
              </Link>
            </li>
          </ul>
          <LinksLogo />
        </div>
      </Collapse>
    </StyledNav>
  )
}


