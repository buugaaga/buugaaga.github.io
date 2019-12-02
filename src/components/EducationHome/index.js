import React from 'react';
import { StyledTextFunc } from '../StyledTextFunc';

const StyledText = StyledTextFunc("black");

export function Education() {
  return (
    <div className="container">
      <div className="row vh-100">
        <div className="col">
          <StyledText>
            <p>Образование</p>
          </StyledText>
        </div>
      </div>
    </div>
  );
}
