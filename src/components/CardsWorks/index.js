import React from 'react'
import styled from 'styled-components';

import { ImageOfCards } from './ImageOfCards';
import { HeaderTitle } from './HeaderTitle';
import { CardOfProject } from './CardOfProject';
import { Description } from './Description';
import { SSpanRu, SSpanEn } from '../SSpan';


const WrapperOfCards = styled.div`
  display: flex;
  flex-direction: column;
  flex: wrap;
`;

function CardsWorks({ data, language }) {

  return (
    <WrapperOfCards>
      <HeaderTitle>
        <h2>
          <SSpanRu ru={language}>Мои работы</SSpanRu>
          <SSpanEn en={language}>My works</SSpanEn>
        </h2>
      </HeaderTitle>
      {data.map( (obj, i) => (
        <React.Fragment key={i}>
          <CardOfProject >
            <ImageOfCards props={obj} />
            <Description obj={obj} language={language} /> 
          </CardOfProject>
          <div><hr/></div>
        </React.Fragment>
      )).reverse()}

    </WrapperOfCards>
  )
}

export { CardsWorks }