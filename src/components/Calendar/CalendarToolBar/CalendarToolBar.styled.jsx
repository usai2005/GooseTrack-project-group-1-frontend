import { styled } from 'styled-components';

const viewport = {
  mob: '@media screen and (max-width: 767px)',
};

export const PeriodWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${viewport.mob} {
    display: block;
    margin-bottom: 24px;
  }
`;
