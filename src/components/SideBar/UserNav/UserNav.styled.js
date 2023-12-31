import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  // Common
  margin: 0;
  padding: 0;
  list-style: none;
  //
`;

export const ItemLink = styled(NavLink)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 185px;
  height: 40px;
  gap: 8px;
  padding: 10px 12px;

  margin-bottom: 18px;

  border-radius: 8px;

  color: rgba(52, 52, 52, 0.5);

  background-color: ${props =>
    props.$currenttype
      ? props.theme.variable.activeCalendarLinkColor
      : props.theme.variable.sideBar};

  color: ${props =>
    props.$currenttype
      ? props.theme.variable.bgReversLabel
      : props.theme.variable.btnNavText};

  font-size: 14px;
  font-weight: 600;
  line-height: normal;

  @media screen and (min-width: 768px) {
    width: 225px;
    height: 56px;

    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 240px;

    font-size: 16px;
  }

  fill: rgba(52, 52, 52, 0.5);
  stroke: rgba(52, 52, 52, 0.5);

  fill: ${props =>
    props.$currenttype
      ? props.theme.variable.bgReversLabel
      : props.theme.variable.btnNavText};

  stroke: ${props =>
    props.$currenttype
      ? props.theme.variable.bgReversLabel
    : props.theme.variable.btnNavText};

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${props => props.theme.variable.btnNav};

    color: ${props =>
      props.$currenttype
        ? props.theme.variable.btnDisActive
        : props.theme.variable.gooseColor};
    fill: ${props =>
      props.$currenttype
        ? props.theme.variable.btnDisActive
        : props.theme.variable.gooseColor};
    stroke: ${props =>
      props.$currenttype
        ? props.theme.variable.btnDisActive
        : props.theme.variable.gooseColor};
    // color: #3e85f3;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.is-active {
    background-color: ${props => props.theme.variable.btnNav};

    color: ${props =>
      props.$currenttype
        ? props.theme.variable.btnDisActive
        : props.theme.variable.gooseColor};
    fill: ${props =>
      props.$currenttype
        ? props.theme.variable.btnDisActive
        : props.theme.variable.gooseColor};
    stroke: ${props =>
      props.$currenttype
        ? props.theme.variable.btnDisActive
        : props.theme.variable.gooseColor};
    // color: #3e85f3;
  }
`;
