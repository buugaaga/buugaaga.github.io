import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { Nav } from '../NavBar/Nav';
import { NavState } from '../../context/navState';
// import { HamburgerButton } from '../NavBar/HamburgerButton';

export function Main() {
  const StyledCol = styled(Col)`
    background-color: silver;
  `;

  return (
    <Container>
      <Row>
        <StyledCol>
          <NavState>
            <Nav />
          </NavState>
        </StyledCol>
      </Row>
    </Container>
  )
}