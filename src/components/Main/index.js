import React from 'react';

// import styled from 'styled-components';

import { NavBar } from '../NavBar';
import { NavState } from '../../context/navState';
import { HamburgerButton } from '../HamburgerButton';
import { Header } from '../Header';
import { Face } from '../Face';

export function Main() {

  return (
    <>
      <nav>
        <NavState>
          <NavBar />
          <HamburgerButton />
          
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