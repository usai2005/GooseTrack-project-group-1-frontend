import styled from 'styled-components';
export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #3e85f3;
  width: 100%;
  border-radius: 16px;
  padding: 16px;
  border-color: none;
  margin-top: 30px;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  line-height: 1.5px;
  font-style: normal;
  font-weight: 600;
  color: #fff;

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
    background-color: #2b78ef;
    box-shadow: rgb(244, 129, 116) 0px 0px 2px 1px,
      rgb(251, 178, 174) 0px 0px 0px 3px;
  }

  &:disabled {
    cursor: pointer;
    background-color: rgb(163, 168, 173);
    box-shadow: none;
    color: rgb(255, 255, 255) !important;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`;

export const Span = styled.span`
  margin-right: 11px;
`;
export const LoginIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: #fff;
`;
