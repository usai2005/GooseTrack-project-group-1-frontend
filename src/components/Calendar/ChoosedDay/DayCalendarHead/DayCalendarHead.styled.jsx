import { styled } from 'styled-components';

export const WeekNames = styled.li`
  list-style: none;
  color: #343434;
  font-size: 16px;
  font-weight: 600;
  line-height: calc(18 / 16);
  text-transform: uppercase;
  text-align: center;

  /* &:nth-last-of-type(-n + 2) {
    color: #3e85f3;
  } */
`;
export const WeekNamesContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 16px;
  margin: 0 0 14px;
  border: 1px solid #dce3e5;
  border-radius: 8px;
  background-color: #fff;
`;
