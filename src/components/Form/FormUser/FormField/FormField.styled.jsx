import styled from 'styled-components';

const viewport = {
  mob: '@media screen and (max-width: 767px)',
};

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;

  font-family: 'InterRegular';
  font-size: 14px;
  line-height: 15px;

  color: ${props => props.theme.variable.bgReversLabel};
`;

export const Input = styled.input`
  font-family: 'InterSemiBold';
  font-size: 16px;
  background-color: ${props => props.theme.variable.secondaryBg};
  outline: none;
  border: 1px solid;
  border-radius: 8px;
  border-color: ${props => props.theme.variable.borderProfileColor};
  color: ${props => props.theme.variable.text};
  padding: 14px 18px;
  height: 46px;
  width: 354px;

  ${viewport.mob} {
    height: 42px;
    width: 300px;
    padding: 12px 14px;
    font-size: 14px;
  }

  &::placeholder {
    font-family: 'InterRegularr';
    font-size: 16px;
    line-height: 18px;
    color: 'inherit';
  }

  &[type='time']::-webkit-calendar-picker-indicator {
    background: none;
  }
`;
