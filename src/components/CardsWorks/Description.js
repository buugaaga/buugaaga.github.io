import React from 'react'
import styled from 'styled-components';

import  { ButtonsOfCard } from './ButtonsOfCard';

const StyledDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: space-around;
  h3, p {
    align-self: center;
  }
  p, h3 {
    padding: 10px;
    padding-left: 50px;
    @media (max-width: 780px) {
    padding-left: 20px;
  }
  }
  div {
    margin-bottom: 20px;    
    
  }
  
`;

export const Description = ({ obj, language }) => (
  <StyledDescription>
    <h3>{ language ? obj.titleRu : obj.titleEn }</h3>
    <p>{language ? obj.descriptionRu : obj.descriptionEn }</p>
    <ButtonsOfCard obj={obj} language={language} />
  </StyledDescription>
)
