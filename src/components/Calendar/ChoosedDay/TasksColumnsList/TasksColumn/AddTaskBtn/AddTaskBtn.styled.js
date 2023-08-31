import { styled } from 'styled-components';
const viewport = {
  mob: '@media screen and (max-width: 767px)',
  tab: '@media screen and (min-width: 768px)',
  desk: '@media screen and (min-width: 1440px)',
};
export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.variable.btnBlue};
  width: 100%;
  border-radius: 8px;
  padding: 17px;
  border: 1px dashed #cae8ff;
  border-color: ${props => props.theme.variable.activeBtnBlue};
  margin-top: 8px;
  text-align: center;
  font-size: 14px;
  font-family: InterSemiBold;
  color: ${props => props.theme.variable.text};

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
