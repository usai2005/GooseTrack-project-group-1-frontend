import { styled } from 'styled-components';
const viewport = {
  mob: '@media screen and (max-width: 767px)',
  tab: '@media screen and (min-width: 768px)',
  desk: '@media screen and (min-width: 1440px)',
};
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 27px;
  background-color: #f7f6f9;
  /* 
  ${viewport.mob} {
    width: 287px;
    font-size: 14px;
    margin: 32px auto;
  } */
`;
