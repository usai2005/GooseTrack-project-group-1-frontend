import PropTypes from 'prop-types';

import { Label, Input, InputFieldThumb } from './FormField.styled';

export const FormField = ({
  id,
  inputName,
  type,
  placeholder,
  label,
  register,
  setIsDisabled,
}) => {
  return (
    <InputFieldThumb>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(inputName)}
        onChange={() => {
          setIsDisabled(false);
        }}
      />
    </InputFieldThumb>
  );
};

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};
