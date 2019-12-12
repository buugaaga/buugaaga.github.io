import React from 'react';
import styled from 'styled-components';

import linkedin from '../../images/linkedin.svg';
import twitter from '../../images/twitter.svg';
import fcc from '../../images/fcc.svg';
import github from '../../images/github.svg'

const IconsLink = styled.div`
  display: flex;
  margin: 20px 30px 20px 40px;
  div {
    margin-right: 20px;
    width: 30px;
    img {
      width: 100%;
    }
  }
`;

export function LinksLogo() {
  return (
    <IconsLink>
      <div>
        <a href="https://www.linkedin.com/in/eldar-nasyrov-a0391b177/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="linkedin link" />  
        </a>
      </div>
      <div>
        <a href="https://www.freecodecamp.org/fcc4c90eabd-ea8b-46a1-9916-df4f3255c07c" target="_blank" rel="noopener noreferrer">
          <img src={fcc} alt="freecodecamp" />
        </a>        
      </div>
      <div>
        <a href="https://twitter.com/ildarDanilovich" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="freecodecamp" />
        </a>
      </div>
      <div>
        <a href="https://github.com/buugaaga" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github" />
        </a>
      </div>
    </IconsLink>
  )
}
