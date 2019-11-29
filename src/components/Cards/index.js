import React from 'react'
import styled from 'styled-components';

import { ImageOfCards } from './ImageOfCards';
import { HeaderTitle } from './HeaderTitle';
import { CardOfProject } from './CardOfProject';
import { Description } from './Description';


const WrapperOfCards = styled.div`
  display: flex;
  flex-direction: column;
  flex: wrap;
`;

function Cards({ props }) {
  console.log(props[0].urlOfImage)
  return (
    <WrapperOfCards>
      <HeaderTitle>
        <h2>Title of cards</h2>
      </HeaderTitle>
      {props.map( (obj, i) => (
        <CardOfProject key={i}>
          <ImageOfCards props={obj} />
          <Description props={obj} />        
        </CardOfProject>
      )).reverse()}

    </WrapperOfCards>
  )
}

export { Cards };