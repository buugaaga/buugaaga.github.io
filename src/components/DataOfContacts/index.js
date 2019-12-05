import React from 'react';
import styled from 'styled-components';

const StyledContacts = styled.div`
  padding-top: 60px;
  padding-left: 20px;
`;

export function DataOfContacts() {
  return (
    <StyledContacts>
      <h1>Я на связи</h1>
      <h3>можете связаться со мной по телефону</h3>
      <p><a href="tel:+7 992 343 75 03">+7 992 343 75 03</a></p>
      <h3>или написать на почту</h3>
      <p><a href="mailto: buugaaga.ildar@gmail.com">buugaaga.ildar@gmail.com</a></p>
      <h3>также в меню есть ссылки на <a href="https://twitter.com/ildarDanilovich" target="_blank" rel="noopener noreferrer">twitter</a>, <a href="https://www.linkedin.com/in/eldar-nasyrov-a0391b177/" target="_blank" rel="noopener noreferrer">linkedin</a>, <a href="https://www.freecodecamp.org/fcc4c90eabd-ea8b-46a1-9916-df4f3255c07c" target="_blank" rel="noopener noreferrer">freecodecamp</a></h3>
    </StyledContacts>
  )
}
