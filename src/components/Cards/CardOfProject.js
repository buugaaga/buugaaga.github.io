import styled from 'styled-components';

export const CardOfProject = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  background-color: #ddd;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;