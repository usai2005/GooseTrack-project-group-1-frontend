import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

import { StyledErrorMessage } from '../consts/styledErrorMessage.styled';

import { Label, Input, InputFieldThumb } from './FormField.styled';

export const FormField = ({
  id,
  inputName,
  type,
  placeholder,
  label,
  register,
  error,
  setValue,
}) => {
  const isPhoneField = inputName === 'phone';

  return (
    <>
      <InputFieldThumb>
        <Label
          htmlFor={id}
          style={{
            color: error ? '#e74a3b' : '',
          }}
        >
          {label}
        </Label>
        {isPhoneField ? (
          <InputMask
            style={{
              borderColor: error ? '#e74a3b' : '',
            }}
            id={id}
            mask="+99 (999) 999-9999"
            maskChar="_"
            type="tel"
            placeholder={placeholder}
            {...register(inputName)}
            onChange={e => {
              setValue(inputName, e.target.value, { shouldDirty: true });
            }}
          >
            {inputProps => <Input {...inputProps} />}
          </InputMask>
        ) : (
          <Input
            style={{
              borderColor: error ? '#e74a3b' : '',
            }}
            id={id}
            type={type}
            placeholder={placeholder}
            {...register(inputName)}
            onChange={e => {
              setValue(inputName, e.target.value, { shouldDirty: true });
            }}
          />
        )}
        {error && <StyledErrorMessage>{error.message}</StyledErrorMessage>}
      </InputFieldThumb>
    </>
  );
};

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.any,
};
