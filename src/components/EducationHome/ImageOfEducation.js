import React from 'react'
import styled from 'styled-components';


const StyledImage = styled.div`
  img {
    width: 150px;
  }
  img.show {
    position: absolute;
    top: -200px;
    width: 700px;
    box-shadow: 0 0 0 200px rgba(0, 0, 0, 0.3);
  }
`;

export function ImageOfEducationFunc(url, alt) {
  
  
  const showImage = (event) => {
    let elem = event.target;
    if (!elem.classList.contains("show")) {
      elem.classList.add("show")
      return ;
    };
    document.addEventListener("mousedown", () => {
        elem.classList.remove("show")
    })
    
  } 
    
  return (
    <div onClick={showImage}>
      <StyledImage>
        <img src={url} alt={alt} />
      </StyledImage>
      </div>
  )
}
