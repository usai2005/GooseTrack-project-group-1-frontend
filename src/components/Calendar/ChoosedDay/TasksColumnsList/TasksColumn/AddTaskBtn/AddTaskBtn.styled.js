import { styled } from 'styled-components';

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 8px;
  padding: 17px;
  border: 1px dashed #cae8ff;
  margin-top: 8px;
  text-align: center;
  font-size: 14px;
  font-family: InterSemiBold;
  margin-top: auto;
  color: ${props => props.theme.variable.text};

  background-color: ${props => props.theme.variable.btnNav};
  border-color: #3e85f3;

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
  margin-left: 8px;
`;
export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${props => props.theme.variable.text};
`;
