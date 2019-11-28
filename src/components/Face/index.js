import React from 'react';
import styled from 'styled-components';
import { Container,  Col, Image, Row } from 'react-bootstrap';

import { StyledText } from '../StyledText';
import father from '../../images/father.svg';

const StyledTextFunc = StyledText("black");

const SRow = styled(Row)`
  height: 100vh;
`;

function Face() {
  return (
    <Container>
      <SRow className="justify-content-center">
        <Col xs={12} className="align-self-center">
          <StyledTextFunc>
            <p>Ильдар Насыров</p>
          </StyledTextFunc>
        </Col>
        <Col xs={6} className="align-self-center" >
          <Image src={father} style={{width: 200}}roundedCircle className="d-block mx-auto"></Image>
        </Col>
      </SRow>
    </Container>
  )
}

export { Face };
