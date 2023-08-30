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
  margin-top: 8px;
  text-align: center;
  color: #fff;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
    background-color: #2b78ef;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
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
