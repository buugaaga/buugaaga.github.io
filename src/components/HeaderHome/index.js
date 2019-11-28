import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import { StyledText } from '../StyledText';
import Ural from '../../images/nature.png';

const StyledTextFunc = StyledText("white");
const StyledContainer = styled(Container)`
  
  background-image: url(${Ural});
  background-repeat: no-repeat;
  background-size: cover;
`;
const StyledRow = styled(Row)`
  height: 100vh;
`;

function Header() {
  return (
    <>
      <StyledContainer fluid md={12}>
        <StyledRow className="align-items-center  ">
          <Col >
            <StyledTextFunc><p>Ильдар Насыров</p></StyledTextFunc>
            <p className="text-center">javascript разработчик</p>
          </Col>
        </StyledRow>
      </StyledContainer>
     
    </>
  )
}





export { Header, StyledRow };