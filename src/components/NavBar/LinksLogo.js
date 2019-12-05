import React from 'react';
import styled from 'styled-components';

import linkedin from '../../images/linkedin.svg';
import twitter from '../../images/twitter.svg';
import fcc from '../../images/fcc.svg';

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
        <a href="https://www.linkedin.com/in/eldar-nasyrov-a0391b177/">
          <img src={linkedin} alt="linkedin link" />  
        </a>
      </div>
      <div>
        <a href="https://twitter.com/ildarDanilovich">
          <img src={fcc} alt="freecodecamp" />
        </a>        
      </div>
      <div>
        <a href="https://www.freecodecamp.org/fcc4c90eabd-ea8b-46a1-9916-df4f3255c07c">
          <img src={twitter} alt="freecodecamp" />
        </a>
      </div>
    </IconsLink>
  )
}
