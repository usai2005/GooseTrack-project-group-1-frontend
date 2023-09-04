import styled from 'styled-components';

export const MainLayoutContainer = styled.div`
  display: flex;

  background-color: ${props => props.theme.variable.primaryBg};
  /* background: #f7f6f9; */
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 100vh;

  @media screen and (min-width: 1440px) {
    width: calc(100% - 289px);
  }
`;