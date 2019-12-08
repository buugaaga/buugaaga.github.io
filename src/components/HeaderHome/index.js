import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import { StyledTextFunc } from '../StyledTextFunc';
import Ural from '../../images/nature.png';

const StyledText = StyledTextFunc("white");
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
            <StyledText><p><span className="ru">Ильдар Насыров</span></p></StyledText>
            <p className="text-center"><span className="ru">javascript разработчик</span></p>
          </Col>
        </StyledRow>
      </StyledContainer>
    </>
  )
}

export { Header, StyledRow };