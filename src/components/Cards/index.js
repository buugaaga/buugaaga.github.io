import React from 'react'
import styled from 'styled-components';

import { ImageOfCards } from '../ImageOfCards';


const StyledCards = styled.div`
  display: flex;
  margin: 20px;
  padding: 20px 40px;
  background-color: rgba(20, 20, 20, 0.5);
  border-radius: 10px;
`;

function Cards({ props }) {
  console.log(props[0].urlOfImage)
  return (
    <div>
      {props.map( (obj, i) => (
        <StyledCards key={i}>
          <ImageOfCards src={obj.urlOfImage} />
        </StyledCards>
      ))}
    </div>
  )
}

export { Cards };