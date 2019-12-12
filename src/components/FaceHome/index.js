import React from 'react';
import styled from 'styled-components';
import { Container,  Col, Image, Row } from 'react-bootstrap';

import ildar from '../../images/Ildar.png';
import { SSpanRu, SSpanEn } from '../SSpan';

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

function Face({language}) {
  return (
    <StyledContainer>
      <Row>
        <Col xs={12} className="align-self-center ">
         
        </Col>
        <Col className="col-md-4 col-sm-12">
          <p className="lead text-center">
            <SSpanRu ru={language}>Предлагаю услуги по разработке веб приложений на javascript. В своей работе использую современные технологии на основе React.</SSpanRu>
            <SSpanEn en={language}>I offer services for developing web applications in javascript. In my work I use modern technologies based on React.</SSpanEn>
          </p>
            
        </Col>
        <Col className="col-md-4 col-sm-12 " >
          <div className="img-container">
            <Image src={ildar}  className="img-fluid rounded-circle mt-2"></Image>
          </div>
        </Col>
        <Col className="col-md-4 col-sm-12">
          <p className="lead text-center">
            <SSpanRu ru={language}>Качественное выполнение и уважительное отношение</SSpanRu>
            <SSpanEn en={language}>Quality execution and respect</SSpanEn>
          </p>
        </Col>
      </Row>
    </StyledContainer>
  )
}

export { Face };
