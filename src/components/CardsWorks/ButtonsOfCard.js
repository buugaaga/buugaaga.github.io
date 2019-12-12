import React from 'react';

import { Button, ButtonToolbar } from 'react-bootstrap';
import { SSpanRu, SSpanEn } from '../SSpan';

export const ButtonsOfCard = ({ obj, language }) => (
  <ButtonToolbar className="justify-self-end justify-content-around">
    <Button as="a" href={obj.urlOfCode} variant="outline-success" className="mt-2" >
      <SSpanRu ru={language}>смотреть код на github</SSpanRu>
      <SSpanEn en={language}>watch github code</SSpanEn>
    </Button>
    { obj.urlOfDescription ?  <Button as="a" href={obj.urlOfDescription} variant="outline-success" className="mt-2" >
      <SSpanRu ru={language}>описание работы в блоге</SSpanRu>
      <SSpanEn en={language}>blog job description</SSpanEn>
    </Button> : ""}

    <Button href={obj.urlOfDemo} variant="outline-success" className="mt-2" >
      <SSpanRu ru={language}>смотреть демо</SSpanRu>
      <SSpanEn en={language}>watch demo</SSpanEn>
    </Button>
  </ButtonToolbar>

)