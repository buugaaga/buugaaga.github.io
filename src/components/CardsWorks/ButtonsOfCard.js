import React from 'react';

import { Button, ButtonToolbar } from 'react-bootstrap';

export const ButtonsOfCard = ({props}) => (
  <ButtonToolbar className="justify-self-end justify-content-around">
    <Button href={props.urlOfCode} variant="outline-success">смотреть код</Button>
    <Button href={props.urlOfDemo} variant="outline-success">смотреть демо</Button>
  </ButtonToolbar>

)