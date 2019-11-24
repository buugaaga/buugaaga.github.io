import React, { useContext } from 'react';
import { Collapse } from 'react-bootstrap';

import { MenuContext } from '../../context/navState';

function NavBar() {
  const { isMenuOpen } = useContext(MenuContext);
  return (
    <>
      <Collapse in={isMenuOpen}>
        <ul>
          <li>bu</li>
        </ul>
      </Collapse>
    </>
  )
}

export { NavBar };
