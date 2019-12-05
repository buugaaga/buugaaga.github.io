import React, { useContext } from 'react';
import styled from 'styled-components';

import { MenuContext } from '../../context/navState';

const MenuButton = styled.button`
  position: absolute;
  transform-origin: 16px 11px;
  outline: 0;
  border: 0;
  padding: 12px;
  background: none;

  span {
    transition: all 0.3s ;
  }
  :focus {
    border: medium none rgb(111, 255, 176);
    box-shadow: (111, 255, 176) 0 0 2px 2px;
    outline: 0; 
  }
  :hover {
    @media (pointer: fine) {
      span {
        background-color: lightblue;
      }
      span:nth-of-type(1) {
        width: 33px;
      }
      span:nth-of-type(2) {
        width: 40px;
      }
      span:nth-of-type(3) {
        width: 30px; 
      }
    }
  }
  
  
  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(10px, 7px);
      width: 30px; 
    }
    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none; 
    }
    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(7px, -5px);
    }
  }
`;

const Bar = styled.span`
  display: block;
  width: 30px;
  height: 3px;
  margin-bottom: 7px;
  background-color: blue;
`;

const HamburgerButton = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  }
  return (
    <MenuButton 
      className={ isMenuOpen ? 'active' : '' }
      aria-label="Открыть главное меню"
      aria-haspopup={true}
      onClick={ clickHandler }
    >
      <Bar />
      <Bar />
      <Bar />  
    </MenuButton>
  )
}

export { HamburgerButton };




