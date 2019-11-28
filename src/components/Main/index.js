import React from 'react';

// import styled from 'styled-components';

// import { NavBar } from '../NavBar';
// import { NavState } from '../../context/navState';
// import { HamburgerButton } from '../HamburgerButton';
import { Header } from '../Header';
import { Face } from '../Face';

function Main() {

  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <Face />
      </section>
    </>
  )
}

export { Main };