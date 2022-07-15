import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem); //10 rem para os espaços da margin
  margin: 5rem auto; //Os 10 rem ..
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;
