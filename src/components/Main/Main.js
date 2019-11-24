import React from 'react';

import styled from 'styled-components';

import { NavBar } from '../NavBar';
import { NavState } from '../../context/navState';
import { HamburgerButton } from '../NavBar/HamburgerButton';

export function Main() {

  return (
    <div>
      <NavState>
        bububub
        <HamburgerButton />
        <NavBar />
      </NavState>
    </div>
  )
}