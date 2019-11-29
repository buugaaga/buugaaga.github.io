import styled from 'styled-components';
import React from 'react';
// import nothing from '../images/nothing.png';
 

const StyledImageOfCards = styled.div`
  width: 300px;
  flex-shrink: 0;
  box-shadow: 0 0 5px 5px #eee;
  img {
    width: 100%;
  }
`;

export const ImageOfCards = ({props}) => (
  <StyledImageOfCards>
    <img src={props.urlOfImage} alt={props.name} />
  </StyledImageOfCards>
)   
