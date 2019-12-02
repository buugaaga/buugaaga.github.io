import styled from 'styled-components';

const StyledTextFunc = color => styled.h3`
  display: block;
  margin-top: 30px;
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
    @media (max-width: 450px) {
      display: none;
    }
  };
  ::after {
    content: " ";
    height: 2px;
    width: 80px;
    background-color: ${color};
    display: inline-block;
    margin: 10px 10px;
    line-height: 3 0px;
    @media (max-width: 450px) {
      margin: 10px 70px;
    }
  }
`;

export { StyledTextFunc };