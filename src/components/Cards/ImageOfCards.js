import styled from 'styled-components';
import React from 'react';
// import nothing from '../images/nothing.png';
 

const StyledImageOfCards = styled.div`
  margin-left: 50px;
  max-width: 300px;
  flex-basis: 500px;
  
  @media (max-width: 780px){
    margin: 10px;
    align-self: center;
    flex-basis: auto;
  }
  img {
    width: 100%;
    box-shadow: 0 0 5px 5px #eee;
  }
`;

export const ImageOfCards = ({props}) => (
  <StyledImageOfCards>
    <img src={props.urlOfImage} alt={props.name} />
  </StyledImageOfCards>
)   
