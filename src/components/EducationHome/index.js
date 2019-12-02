import React from 'react';
import { StyledTextFunc } from '../StyledTextFunc';
import sololearn from '../../images/sololearn.png';
import { ImageOfEducationFunc } from './ImageOfEducation';

const StyledText = StyledTextFunc("black");

export function Education() {
  return (
    <div className="container">
      <div className="row vh-100">
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
            </li>
            <li>
              <h5>Сертефикат окончания курсов по javscript</h5>
              {ImageOfEducationFunc(sololearn, "sololearn")}         
            </li>
            <li>
              <h5>Сертефикат от FreeCodeCamp</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
