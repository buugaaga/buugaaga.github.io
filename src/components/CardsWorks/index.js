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

function CardsWorks({ props }) {
  console.log(props[0].urlOfImage)
  return (
    <WrapperOfCards>
      <HeaderTitle>
        <h2>Мои работы</h2>
      </HeaderTitle>
      {props.map( (obj, i) => (
        <React.Fragment key={i}>
          <CardOfProject >
            <ImageOfCards props={obj} />
            <Description props={obj} /> 
          </CardOfProject>
          <div><hr/></div>
        </React.Fragment>
      )).reverse()}

    </WrapperOfCards>
  )
}

export { CardsWorks }