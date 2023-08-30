import { styled } from 'styled-components';
const viewport = {
  mob: '@media screen and (max-width: 767px)',
  tab: '@media screen and (min-width: 768px)',
  desk: '@media screen and (min-width: 1440px)',
};
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background: #fff;
  min-height: 165px;

  /* ${viewport.mob} {
    width: 287px;
    font-size: 14px;
    margin: 32px auto;
  }  */
`;
