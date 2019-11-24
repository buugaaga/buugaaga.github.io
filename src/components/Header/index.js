import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import Ural from '../../images/nature.png';

function Header() {
  return (
    <>
      <StyledContainer fluid>
        <StyledRow className="align-items-center  ">
          <Col >
            <StyledText><p>Ильдар Насыров</p></StyledText>
            <p className="text-center">javascript разработчик</p>
          </Col>
        </StyledRow>
      </StyledContainer>
     
    </>
  )
}

const StyledContainer = styled(Container)`
  background-image: url(${Ural});
  background-repeat: no-repeat;
  background-size: cover;
`;
const StyledRow = styled(Row)`
  height: 100vh;
`;
const StyledText = styled.h3`
  display: block;
  margin-left: -15px;
  font-size: 30px;
  font-family:BlinkMacSystemFont;
  text-align: center;
  & p {
    display: inline-block;
    color: white;
    text-shadow: 2px 2px 5px grey ;
  }
  ::before {
    content: " ";
    height: 2px;
    width: 80px;
    background-color: #fff;
    display: inline-block;
    margin: 10px 10px;
    line-height: 50px;
  };
  ::after {
    content: " ";
    height: 2px;
    width: 80px;
    background-color: #fff;
    display: inline-block;
    margin: 10px 10px;
    line-height: 50px;
  }
`;


export { Header, StyledText, StyledRow };