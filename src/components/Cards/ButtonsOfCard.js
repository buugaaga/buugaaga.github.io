import React from 'react';

import { Button, ButtonToolbar } from 'react-bootstrap';

export const ButtonsOfCard = ({props}) => (
  <ButtonToolbar className="justify-self-end justify-content-around">
    <Button  fref={props.urlOfCode} variant="outline-success">смотреть код</Button>
    <Button  fref={props.urlOfDemo} variant="outline-success">смотреть демо</Button>
  </ButtonToolbar>

)