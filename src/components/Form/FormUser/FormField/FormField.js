import PropTypes from 'prop-types';

import { Label, Input } from './FormField.styled';

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
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(inputName)}
        onChange={() => {
          console.log('edit input');
          setIsDisabled(false);
        }}
      />
    </div>
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
