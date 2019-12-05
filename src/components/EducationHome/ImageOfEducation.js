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
    box-shadow: 0 0 0 500px rgba(0, 0, 0, 0.3);
    @media (max-width: 900px) {
      width: 350px;
      left: 10px;
    }
  }
`;

export function ImageOfEducationFunc(url, alt) {
  
  
  const showImage = (event) => {
    let elem = event.target;
    let handler = () => {
      elem.classList.remove("show");
      document.removeEventListener("click", handler)
      document.removeEventListener("scroll", handler)
      console.log("pup")
    }
    if (elem.tagName === "IMG" && !elem.classList.contains("show")) {
      document.addEventListener("click", handler)
      document.addEventListener("scroll", handler)
      elem.classList.add("show")
      return ;
    };
    
  } 
    
  return (
    <div onClick={showImage}>
      <StyledImage>
        <img src={url} alt={alt} />
      </StyledImage>
      </div>
  )
}
