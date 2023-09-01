import styled from 'styled-components';

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
  padding: 0.875rem;

  width: 100%;

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
