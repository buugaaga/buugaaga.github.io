import React from 'react';
import styled from 'styled-components';

import { StyledTextFunc } from '../StyledTextFunc';
import sololearn from '../../images/sololearn.png';
import { ImageOfEducationFunc } from './ImageOfEducation';
import { SSpanRu, SSpanEn } from '../SSpan';

const StyledText = styled(StyledTextFunc("black"))`
  padding-bottom: 50px;
  p {
    text-shadow: none;
  }
`;

export function Education({language}) {
  return (
    <div className="container" >
      <div className="row">
        <div className="col-12">
          <StyledText>
            <p>
              <SSpanRu ru={language}>Образование</SSpanRu>
              <SSpanEn en={language}>Education</SSpanEn>
            </p>
          </StyledText>
        </div>
        <div className="col">
          <ul>
            <li>
              <h5>
                <SSpanRu ru={language}>Диплом Оренбургского Государственного университета</SSpanRu>
                <SSpanEn en={language}></SSpanEn>
              </h5>
              <p className="lead">
                <SSpanRu ru={language}>инженер бакалавр "Архитектурно-строительного" факультета <br /> 
                год обучения: 2008-2017
                </SSpanRu>
                <SSpanEn en={language}>Engineer Bachelor of the Faculty of Architecture and Civil Engineering <br />
                 Year of study: 2008-2017</SSpanEn>
              </p>
              <hr/>
            </li>
            <li>
              <h5>
                JavaScript Algorithms and Data Structures Certification
              </h5>
              <p className="lead">
                <SSpanRu ru={language}> Сертификация разработчика, представляющая примерно 300 часов курсовой работы</SSpanRu>
                <SSpanEn en={language}>Developer certification representing approximately 300 hours of coursework</SSpanEn>
              </p>
              <a href="https://www.freecodecamp.org/certification/fcc4c90eabd-ea8b-46a1-9916-df4f3255c07c/javascript-algorithms-and-data-structures" target="_blank" rel="noopener noreferrer">
                <SSpanRu ru={language}>Смотреть сертефикат</SSpanRu>
                <SSpanEn en={language}>See certificate</SSpanEn>
              </a>
              <hr/>
            </li>
            <li>
              <h5>
                <SSpanRu ru={language}>Сертефикат окончания курсов по javscript</SSpanRu>
                <SSpanEn en={language}>Javascript course certificate</SSpanEn>
              </h5>
              <ImageOfEducationFunc url={sololearn} alt={"sololearn"} />        
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
