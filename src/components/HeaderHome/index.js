import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import { StyledTextFunc } from '../StyledTextFunc';
import Ural from '../../images/nature.png';
import { SSpanRu, SSpanEn } from '../SSpan';

const StyledText = StyledTextFunc("white");
const StyledContainer = styled(Container)`
  background-image: url(${Ural});
  background-repeat: no-repeat;
  background-size: cover;
`;
const StyledRow = styled(Row)`
  height: 100vh;
`;

function Header({language}) {
  
  return (
    <>
      <StyledContainer fluid md={12}>
        <StyledRow className="align-items-center  ">
          <Col >
            <StyledText>
              <p>
                <SSpanRu ru={language}>Ильдар Насыров</SSpanRu> 
                <SSpanEn en={language}>Eldar Nasyrov</SSpanEn>
              </p>
            </StyledText>
            <p className="text-center">
              <SSpanRu ru={language}>javascript разработчик</SSpanRu>
              <SSpanEn en={language}>javascript developer</SSpanEn>
            </p>
          </Col>
        </StyledRow>
      </StyledContainer>
    </>
  )
}

export { Header, StyledRow };