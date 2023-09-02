import { styled } from 'styled-components';

export const PageWrapper = styled.div`
  // width: 100vw;

  padding: 0 20px 95px 20px;

  @media screen and (min-width: 768px) {
    padding: 0 32px 64px 32px;
  }

  @media screen and (min-width: 1440px) {
    // width: calc(100vw - 289px);
    padding: 0 32px 32px 32px;
  }
`;
