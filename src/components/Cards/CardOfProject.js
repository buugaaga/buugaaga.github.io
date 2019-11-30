import styled from 'styled-components';

export const CardOfProject = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 20px;
  
  @media (max-width: 780px) {
    flex-direction: column;
    
    align-content: center;
  }
  @media (min-width: 900px) {
    justify-content: space-between;
  }
`;