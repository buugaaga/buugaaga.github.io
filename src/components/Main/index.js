import React from 'react';

// import styled from 'styled-components';

import { NavBar } from '../NavBar';
import { NavState } from '../../context/navState';
import { HamburgerButton } from '../NavBar/HamburgerButton';
import { Header } from '../Header';
import { Face } from '../Face';

export function Main() {

  return (
    <>
      <nav>
        <NavState>
          <HamburgerButton />
          <NavBar />
        </NavState>
        
      </nav>
      <header>
        <Header />
      </header>
      <section>
        <Face />
      </section>
    </>
  )
}