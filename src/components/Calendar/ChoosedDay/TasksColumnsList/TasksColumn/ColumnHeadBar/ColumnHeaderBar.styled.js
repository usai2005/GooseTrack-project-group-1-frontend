import { styled } from 'styled-components';
const viewport = {
  mob: '@media screen and (max-width: 767px)',
  tab: '@media screen and (min-width: 768px)',
  desk: '@media screen and (min-width: 1440px)',
};
export const Wrapper = styled.div`
  padding: 7px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 35px;

  /* ${viewport.mob} {
    width: 287px;
    font-size: 14px;
    margin: 32px auto;
  }  */
`;
export const Title = styled.h3`
  color: #111;
  font-size: 20px;
  font-family: InterBold;
  line-height: calc(24 / 20);
  /* ${viewport.mob} {
    font-size: 18px;
  } */
`;

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

export const IconPlus = styled.svg`
  width: 24px;
  height: 24px;
`;
