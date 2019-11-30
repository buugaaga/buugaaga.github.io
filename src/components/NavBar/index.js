import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import styled from 'styled-components';

import { MenuContext } from '../../context/navState';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { HamburgerButton } from './HamburgerButton';

const StyledNav = styled.nav`
  position: absolute;
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

export function NavBar() {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  const node = useRef();
  useOnClickOutside(node, () => {
    if (isMenuOpen) toggleMenuMode()
  });
  return (   
    <StyledNav ref={node}>
      <HamburgerButton />
      <Collapse in={isMenuOpen}>
        <ul>
          <li>
            <Link to="/">Домашняя страница</Link>
          </li>
          <li>
            <Link to="/works">Мои работы</Link>
          </li>
          <li>
            <Link to="/contacts">Связаться со мной</Link>
          </li>
        </ul>
      </Collapse>
    </StyledNav>
  )
}


