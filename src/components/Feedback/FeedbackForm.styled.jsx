import styled from 'styled-components';
import { Field, ErrorMessage as FormikErrorMessage } from 'formik';

const viewport = {
  tab: '@media screen and (min-width: 768px)',
  desk: '@media screen and (min-width: 1440px)',
};

export const Contain = styled.div`
  position: relative;
  text-align: left;
  padding: 28px 20px;
  border-radius: 16px;
  width: 335px;

  background-color: ${props => props.theme.variable.bgRevers};
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

  ${viewport.tab} {
    width: 468px;
    padding: 32px;
  }
`;

export const CloseIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const EditIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const Label = styled.label`
  color: ${props => props.theme.variable.bgReversLabel};
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: calc(14 / 12);
`;

export const FormWrapper = styled.div`
  margin-bottom: 14px;
`;

export const AreaReview = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 8px;
`;

export const AreaEdit = styled.ul`
  display: flex;
  gap: 8px;
`;

export const EditBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.variable.icon};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  stroke: #3e85f3;
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: #ffffff;
    background-color: #3e85f3;
  }
`;

export const DeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: #ea3d6533;
  stroke: #ea3d65;
  &:hover,
  &:focus {
    stroke: #ffffff;
    background-color: #ea3d65;
  }
`;

export const Input = styled(Field)`
  resize: none;
  padding: 12px 0 12px 14px;
  width: 295px;
  box-sizing: border-box;
  height: 127px;
  font-weight: 600;
  font-size: 14px;
  line-height: calc((18 / 14) * 100%);
  color: ${props => props.theme.variable.calendarTextColor};
  background-color: ${props => props.theme.variable.primaryBg};
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);

  ${viewport.tab} {
    width: 404px;
  }

  ${viewport.desk} {
    margin-bottom: 18px;
  }

  &:disabled {
    cursor: not-allowed;
  }

  ::placeholder {
    opacity: 1;
    color: rgba(52, 52, 52, 1);
    font-weight: 600;
    font-size: 14px;
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  margin-left: 18px;
  max-width: 100%;
  color: #da1414;
  max-width: 240px;
  font-size: 12px;
  font-weight: 500;
  @media (min-width: 768px) {
    max-width: 330px;
  }
`;

export const AreaBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const SubmitBtn = styled.button`
  color: #ffffff;
  background-color: #3e85f3;
  text-transform: none;
  width: 262px;
  height: 48px;
  font-weight: 600;
  font-size: 14px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #2b78ef;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export const CancelBtn = styled.button`
  color: ${props => props.theme.variable.calendarTextColor};
  background-color: ${props => props.theme.variable.btnRevers};
  text-transform: none;
  width: 262px;
  height: 48px;
  font-weight: 600;
  font-size: 14px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #2b78ef;
  }
`;

export const Close = styled.button`
  position: absolute;
  top: 14px;
  right: 18px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;

  stroke: ${props => props.theme.variable.strokeBg};
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    stroke: #2b78ef;
  }
`;
