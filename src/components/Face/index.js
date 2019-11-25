import React from 'react';
import styled from 'styled-components';
import { Container,  Col, Image, Row } from 'react-bootstrap';


import father from '../../images/father.svg';

function Face() {
  return (
    <Container>
      <SRow className="">
        <Col xs={12} className="align-self-center">
          <StyledText>
            <p>Ильдар Насыров</p>
          </StyledText>
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
