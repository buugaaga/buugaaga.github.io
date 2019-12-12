import React, { useState, useRef } from 'react'
import styled from 'styled-components';

import { useReduceImage } from '../../hooks/useReduceImage';

export const StyledImage = styled.img.attrs(props => ({
  src: props.url,
  alt: props.alt
}))` 
    width: 150px;
  &.show {
    position: absolute;
    top: -200px;
    width: 700px;
    box-shadow: 0 0 0 500px rgba(0, 0, 0, 0.3);
    @media (max-width: 900px) {
      width: 350px;
      left: 10px;
    }
  }
`;

export function ImageOfEducationFunc(props) {

  const [ show, setShow ] = useState(false);

  const node = useRef();
  const currentScrollY = window.scrollY;
  useReduceImage( () => {
    if(((currentScrollY !== window.scrollY)) && show) {
      node.current.classList.remove("show");
    }
  });
  const showImage = () => {
    node.current.classList.add("show");
    setShow(true);
  }
  
  
  return (
    <div >
      <StyledImage  onClick={showImage}  ref={node} url={props.url} alt={props.alt}/>
    </div>
  )
}


