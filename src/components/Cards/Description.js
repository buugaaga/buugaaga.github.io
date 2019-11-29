import React from 'react'
import styled from 'styled-components';

import  { ButtonsOfCard } from './ButtonsOfCard';

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-around;
  p, h3 {
    padding: 10px;
    padding-left: 50px;
  }
  div {
    margin-bottom: 20px;    
  }
`;

export const Description = ({ props }) => (
  <StyledDescription>
    <h3>{props.titleRu}</h3>
    <p>{props.descriptionRu}</p>
    <ButtonsOfCard props={props} />
  </StyledDescription>
)
