import styled from 'styled-components';
import { Field } from 'formik';

// import {
//   Form as FormikForm,
//   Field,
//   ErrorMessage as FormikErrorMessage,
// } from 'formik';

export const FormContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 303px;
  /* max-height: 420px; */
  padding: 48px 18px 40px;
  @media (min-width: 768px) {
    width: 396px;
    padding: 40px 28px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: rgba(52, 52, 52, 0.8);
  /* font-family: Inter; */
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
`;

export const TitleField = styled(Field)`
  width: 267px;
  height: 42px;
  flex-shrink: 0;
  padding: 12px 14px;
  margin-bottom: 16px;
  border-radius: 8px;
  border-color: transparent;
  background: #f6f6f6;
  color: #343434;
  /* font-family: Inter; */
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 340px;
    height: 46px;
    padding: 14px 18px;
    margin-bottom: 18px;
  }
  &::placeholder {
    opacity: 1;
    color: #343434;
    font-size: 14px;
    /* font-family: Inter; */
    font-weight: 600;
    line-height: 18px;
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  gap: 14px;
`;

export const TimeField = styled(Field)`
  width: 126px;
  height: 42px;
  flex-shrink: 0;
  padding: 12px 14px;
  margin-bottom: 16px;
  border-radius: 8px;
  border-color: transparent;
  background: #f6f6f6;
  color: #343434;
  /* font-family: Inter; */
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 163px;
    height: 46px;
    padding: 14px 18px;
    margin-bottom: 32px;
  }
`;

export const PriorityContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
`;

export const PriorityLabel = styled.label`
  display: flex;
  gap: 6px;
`;

export const PriorityField = styled(Field)`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.value) {
      case 'low':
        return '#72C2F8';
      case 'medium':
        return '#F3B249';
      case 'high':
        return '#EA3D65';
      default:
        return 'black';
    }
  }};
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 14px;
`;

export const ButtonAction = styled.button`
  display: flex;
  width: 135px;
  height: 42px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: none;
  background: #3e85f3;
  color: #fff;
  text-align: center;
  /* font-family: Inter; */
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;

  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #2b78ef;
  }

  @media (min-width: 768px) {
    width: 182px;
    height: 48px;
    padding: 10px 20px;
  }
`;

export const CancelButton = styled.button`
  /* display: flex; */
  width: 118px;
  height: 42px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: none;
  background: #efefef;
  color: #111;
  text-align: center;
  /* font-family: Inter; */
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;

  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #e7e3e3;
  }

  @media (min-width: 768px) {
    width: 144px;
    height: 48px;
  }
`;
