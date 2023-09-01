import styled from 'styled-components';

export const MainLayoutContainer = styled.div`
  display: flex;

  background-color: ${props => props.theme.variable.primaryBg};
  /* background: #f7f6f9; */
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: calc(100% - 289px);
`;