import styled from 'styled-components';

const StyledText = color => styled.h3`
  display: block;
  font-size: 30px;
  font-family:BlinkMacSystemFont;
  text-align: center;
  & p {
    display: inline-block;
    color: ${color};
    text-shadow: 3px 3px 4px grey ;
  }
  ::before {
    content: " ";
    height: 2px;
    width: 80px;
    background-color: ${color};
    display: inline-block;
    margin: 10px 10px;
    line-height: 50px;
  };
  ::after {
    content: " ";
    height: 2px;
    width: 80px;
    background-color: ${color};
    display: inline-block;
    margin: 10px 10px;
    line-height: 3 0px;
  }
`;

export { StyledText };