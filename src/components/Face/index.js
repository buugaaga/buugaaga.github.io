import React from 'react';
import styled from 'styled-components';
import { Container,  Col, Image, Row } from 'react-bootstrap';


import father from '../../images/father.svg';

function Face() {
  return (
    <SContainer>
      <Row >
        <Col xs={12}>
          <StyledText>
            <p>Ильдар Насыров</p>
          </StyledText>
        </Col>
      </Row>
      <Row justify-content-center>
        <Col>
          <Image src={father} style={{width: 200}}roundedCircle fluid></Image>
        </Col>
      </Row>
    </SContainer>
  )
}


const SContainer = styled(Container)`
  height: 100vh;
`;
const StyledText = styled.h3`
  width: 100%;
  display: block;
  margin-top: 30px;
  margin-left: -15px;
  font-size: 30px;
  font-family:BlinkMacSystemFont;
  text-align: center;
  & p {
    display: inline-block;
    color: #111;
    text-shadow: 2px 2px 5px grey ;
  }
  ::before {
    content: " ";
    height: 2px;
    width: 80px;
    background-color: #111;
    display: inline-block;
    margin: 10px 10px;
    line-height: 50px;
  };
  ::after {
    content: " ";
    height: 2px;
    width: 80px;
    background-color: #111;
    display: inline-block;
    margin: 10px 10px;
    line-height: 50px;
  }
`;


export { Face };
