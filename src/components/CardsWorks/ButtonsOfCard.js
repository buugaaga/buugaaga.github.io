import React from 'react';

import { Button, ButtonToolbar } from 'react-bootstrap';

export const ButtonsOfCard = ({props}) => (
  <ButtonToolbar className="justify-self-end justify-content-around">
    <Button as="a" href={props.urlOfCode} variant="outline-success" className="mt-2" >смотреть код на github</Button>
    { props.urlOfDescription ?  <Button as="a" href={props.urlOfDescription} variant="outline-success" className="mt-2" >описание работы в блоге</Button> : ""}

    <Button href={props.urlOfDemo} variant="outline-success" className="mt-2" >смотреть демо</Button>
  </ButtonToolbar>

)