import React from 'react';
import { StyledTextFunc } from '../StyledTextFunc';
import sololearn from '../../images/sololearn.png';
import { ImageOfEducationFunc } from './ImageOfEducation';

const StyledText = StyledTextFunc("black");

export function Education() {
  return (
    <div className="container" >
      <div className="row">
        <div className="col-12">
          <StyledText>
            <p>Образование</p>
          </StyledText>
        </div>
        <div className="col">
          <ul>
            <li>
              <h5>Диплом Оренбургского Государственного университета</h5>
              <p className="lead">инженер бакалавр "Архитектурно-строительного" факультета <br /> 
                год обучения: 2008-2017
              </p>
              <hr/>
            </li>
            <li>
              <h5>JavaScript Algorithms and Data Structures Certification</h5>
              <p className="lead">Сертификация разработчика, представляющая примерно 300 часов курсовой работы</p>
              <a href="https://www.freecodecamp.org/certification/fcc4c90eabd-ea8b-46a1-9916-df4f3255c07c/javascript-algorithms-and-data-structures" target="_blank" rel="noopener noreferrer">Смотреть сертефикат</a>
              <hr/>
            </li>
            <li>
              <h5>Сертефикат окончания курсов по javscript</h5>
              <ImageOfEducationFunc url={sololearn} alt={"sololearn"} />        
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
