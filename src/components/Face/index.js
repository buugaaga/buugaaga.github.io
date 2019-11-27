import React from 'react';
import styled from 'styled-components';
import { Container,  Col, Image, Row } from 'react-bootstrap';

import { StyledText } from '../StyledText';
import father from '../../images/father.svg';

const StyledTextFunc = StyledText("black");

function Face() {
  return (
    <Container>
      <SRow className="">
        <Col xs={12} className="align-self-center">
          <StyledTextFunc>
            <p>Ильдар Насыров</p>
          </StyledTextFunc>
        </Col>
      
        <Col xs={{ span: 12, offset: 4 }} className="" >
          <Image src={father} style={{width: 200}}roundedCircle fluid></Image>
        </Col>
      </SRow>
    </Container>
  )
}


const SRow = styled(Row)`
  height: 100vh;
`;


export { Face };
