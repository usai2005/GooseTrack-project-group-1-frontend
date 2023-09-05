import styled from 'styled-components';

export const InputFieldThumb = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 299px;
  height: 64px;

  &:not(:last-child) {
    margin-bottom: 18px;
  }

  @media screen and (min-width: 768px) {
    width: 354px;
    height: 72px;
  }
`;

export const Label = styled.label`
  font-size: 12px;
  color: ${props => props.theme.variable.bgReversLabel};

  line-height: calc(14 / 12);

  @media screen and (min-width: 768px) {
    font-size: 14px;

    line-height: calc(18 / 14);
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;

  padding: 12px 14px;

  background-color: ${props => props.theme.variable.secondaryBg};
  outline: none;

  border: 1px solid ${props => props.theme.variable.borderProfileColor};
  border-radius: 8px;

  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.variable.text};
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    width: 354px;
    height: 46px;

    padding: 14px 18px;

    font-size: 16px;
    line-height: calc(18 / 16);
  }

  &::placeholder {
    /* font-size: 16px;
    line-height: 18px; */
    color: 'inherit'; //should think about placeholder color
  }

  &[type='time']::-webkit-calendar-picker-indicator {
    background: none;
  }
`;
