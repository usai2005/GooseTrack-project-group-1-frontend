import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;

  color: ;
`;

export const Input = styled.input`
  background-color: ;
  outline: none;
  border: 1px solid ;
  border-radius: 8px;
  color: ;
  padding: 0.875rem;

  width: 100%;

  &::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;

    color: ;
  }

  &[type='time']::-webkit-calendar-picker-indicator {
    background: none;
  }
`;