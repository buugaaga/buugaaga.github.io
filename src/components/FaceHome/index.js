import React from 'react';
import styled from 'styled-components';
import { Container,  Col, Image, Row } from 'react-bootstrap';

import { StyledTextFunc } from '../StyledTextFunc';
import ildar from '../../images/Ildar.png';

const StyledText = StyledTextFunc("black");

const StyledContainer = styled(Container)`
  .row {
    flex-flow: row wrap;
    justify-content: center;
    height: 100vh;
    .col {
      flex: 1 1 100%;
      .img-container {
        width: 200px;
        margin: 0 auto;
        img {
          display: block;
          margin: 0 auto;
        }
      }
    }
    
  }
`;

function Face() {
  return (
    <StyledContainer>
      <Row>
        <Col xs={12} className="align-self-center ">
          <StyledText>
            <p>Ильдар Насыров</p>
          </StyledText>
        </Col>
        <Col className="col-md-4 col-sm-12">
          <p className="lead text-center">Предлагаю услуги по разработке веб приложений на javascript. В своей работе использую современные технологии на основе React.</p>
        </Col>
        <Col className="col-md-4 col-sm-12 " >
          <div className="img-container">
            <Image src={ildar}  className="img-fluid rounded-circle mt-2"></Image>
          </div>
        </Col>
        <Col className="col-md-4 col-sm-12">
          <p className="lead text-center">Качественное выполнение и уважительное отношение</p>
        </Col>
      </Row>
    </StyledContainer>
  )
}

export { Face };
