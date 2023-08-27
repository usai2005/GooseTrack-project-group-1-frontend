import styled from 'styled-components';

const viewport = {
    tab: '@media screen and (min-width: 768px)',
    desk: '@media screen and (min-width: 1440px)',
  };

export const InfoBox = styled.div`
  margin-bottom: 40px;
  width: 100%;
  ${viewport.tab} {
    margin-left: auto;
    margin-top: 6px;
    width: auto;
  }
`;
export const InfoList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const InfoItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
export const InfoDay = styled.p`
  color: #343434;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  margin: 0;
  &::before {
    display: block;
    content: ' ';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #ffd2dd;
    display: inline-block;
    margin-right: 8px;
  }
  ${viewport.tab} {
    font-size: 16px;
  }
`;

export const InfoMonth = styled.p`
  color: #343434;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  margin: 0;
  &::before {
    display: block;
    content: ' ';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #3E85F3;
    display: inline-block;
    margin-right: 8px;
  }
  ${viewport.tab} {
    font-size: 16px;
  }
`;
